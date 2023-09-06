import {
  deleteChartDocumentUsingPOST,
  listMyChartEntityByPageUsingPOST,
} from '@/services/bi/chartController';

import { useModel } from '@@/exports';

import { Card, Col, message, Result, Row, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import { Avatar } from 'antd/lib';
import List from 'antd/lib/list';
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

/**
 * 我的图表页面
 * @constructor
 */
const MyChartPage: React.FC = () => {
  const initSearchParams = {
    current: 1,
    pageSize: 4,
    sortField: 'create_time',
    sortOrder: 'desc',
  };

  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({ ...initSearchParams });
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  const [chartList, setChartList] = useState<API.Chart[]>();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await listMyChartEntityByPageUsingPOST(searchParams);
      if (res.data) {
        setChartList(res.data.content ?? []);
        setTotal(res.data.totalElements ?? 0);
        // 隐藏图表的 title
        if (res.data.content) {
          res.data.content.forEach((data) => {
            if (data.status === 'succeed') {
              const chartOption = JSON.parse(data.genChart ?? '{}');
              chartOption.title = undefined;
              data.genChart = JSON.stringify(chartOption);
            }
          });
        }
      } else {
        message.error('获取我的图表失败');
      }
    } catch (e: any) {
      message.error('获取我的图表失败，' + e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  useEffect(() => {}, []);

  const handleDeleteChart = async (chartId: number,version:number) => {
    const param = {
      id: chartId,
      version:version
    };
    const result =  deleteChartDocumentUsingPOST(param);
    if(result.data === false){
      message.error("删除失败")
    }else{
      message.error("删除成功!")
    }
    // 删除完成后调用setRefreshData来刷新页面数据
    loadData();
  };

  return (
    <div className="my-chart-page">
      <div>
        <Search
          placeholder="请输入图表名称"
          enterButton
          loading={loading}
          onSearch={(value) => {
            // 设置搜索条件
            setSearchParams({
              ...initSearchParams,
              name: value,
            });
          }}
        />
      </div>
      <div className="margin-16" />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        pagination={{
          onChange: (page, pageSize) => {
            setSearchParams({
              ...searchParams,
              current: page,
              pageSize,
            });
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: total,
        }}
        loading={loading}
        dataSource={chartList}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{ width: '100%' }}>
              <List.Item.Meta
                avatar={<Avatar src={currentUser && currentUser.avatarUrl} />}
                title={
                  <>
                    <Row>
                      <Col lg={8} md={14}>
                        {item.name}
                      </Col>
                      <Col>
                        <Tag color={'red'}>版本: {item.version}</Tag>
                      </Col>
                      <Col lg={8}>{'生成时间：' + new Date(item.createTime).toLocaleString()}</Col>
                      <Col>
                        <a onClick={() => handleDeleteChart(item.chartId,item.version)}>删除</a>
                      </Col>
                    </Row>
                  </>
                }
                description={
                  <>
                    <a>{item.chartType ? '图表类型：' + item.chartType : undefined}</a>
                  </>
                }
              />
              <>
                {item.status === 'wait' && (
                  <>
                    <Result
                      status="warning"
                      title="待生成"
                      subTitle={item.execMessage ?? '当前图表生成队列繁忙，请耐心等候'}
                    />
                  </>
                )}
                {item.status === 'running' && (
                  <>
                    <Result status="info" title="图表生成中" subTitle={item.execMessage} />
                  </>
                )}
                {item.status === 'succeed' && (
                  <>
                    <div style={{ marginBottom: 16 }} />
                    <p>{'分析目标：' + item.goal}</p>
                    <p>{'分析结论：' + item.genResult}</p>
                    <div style={{ marginBottom: 16 }} />
                    <ReactECharts option={item.genChart && JSON.parse(item.genChart)} />
                  </>
                )}
                {item.status === 'failed' && (
                  <>
                    <div style={{ marginBottom: 16 }} />
                    <p>{'分析目标：' + item.goal}</p>
                    <p>{'执行时间：' + new Date(item.createTime).toLocaleString()}</p>
                    <Result status="error" title="图表生成失败" subTitle={item.execMessage} />
                    <div style={{ marginBottom: 47 }} />
                  </>
                )}
              </>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MyChartPage;
