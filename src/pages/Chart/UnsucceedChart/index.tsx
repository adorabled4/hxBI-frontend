import {
  deleteChartEntityUsingPOST,
  getUnsucceedChartUsingPOST,
  regenerateChartUsingGET,
} from '@/services/bi/chartController';
import { message, Space, Table, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import DataTable from "@/pages/Chart/DataTable";

interface ChartType {
  id?: number;
  name?: string;
  chartData?: string;
  chartType?: string;
  status?: string;
  execMessage?: string;
  goal?: string;
  createTime?: string;
}

const UnsucceedChart: React.FC = () => {
  const initSearchParams = {
    current: 1,
    pageSize: 4,
    sortField: 'create_time',
    sortOrder: 'desc',
  };

  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({ ...initSearchParams });
  // const { initialState } = useModel('@@initialState');
  // const { currentUser } = initialState ?? {};
  const [chartList, setChartList] = useState<ChartType[]>();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getUnsucceedChartUsingPOST(searchParams);
      if (res.data) {
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
        // 隐藏图表的 title
        if (res.data.records) {
          res.data.records.forEach((data) => {
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

  const handleDeleteChart = async (chartId: number) => {
    const param = {
      id: chartId,
    };
    deleteChartEntityUsingPOST(param);
    // 删除完成后调用setRefreshData来刷新页面数据
    loadData();
  };

  const shouldCellUpdate = (record: any, prevRecord: any) => record !== prevRecord;

  const handleReGen = async (chartId: number) => {
    console.log(chartId);
    const res = regenerateChartUsingGET({ chartId: chartId });
    if (res.code === 200) {
      message.success('重试成功!请稍等~');
    }
  };

  const ChartColumns: ColumnsType<ChartType> = [
    {
      title: '图表名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
      shouldCellUpdate,
    },
    {
      title: '图表类型',
      key: 'chartType',
      dataIndex: 'chartType',
      render: (chartType) => {
        let color = status.length > 5 ? 'geekblue' : 'green';
        return <Tag color={color}>{chartType.toUpperCase()}</Tag>;
      },
    },

    {
      title: '分析目标',
      dataIndex: 'goal',
      key: 'goal',
    },
    {
      title: '图表状态',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = status.length > 5 ? 'geekblue' : 'green';
        if (status === 'failed') {
          color = 'red';
        } else if (status === 'running') {
          color = 'blue';
        } else if (status === 'wait') {
          color = 'volcano';
        }
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: '执行信息',
      dataIndex: 'execMessage',
      key: 'execMessage',
      render: (execMessage) => {
        if(!execMessage){
          execMessage='暂无执行信息'
        }
        return <p>{execMessage}</p>
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render: (createTime) => <p>{new Date(createTime).toLocaleString()}</p>,
    },
    {
      title: '操作',
      key: 'id',
      dataIndex: 'id',
      render: (id) => (
        <Space size="middle">
          <a onClick={() => handleDeleteChart(id)}>删除</a>
          <a onClick={() => handleReGen(id)}>重新生成</a>
        </Space>
      ),
    },
  ];

  return (
    <>
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
      <Table
        columns={ChartColumns}
        dataSource={chartList}
        expandable={{
          expandedRowRender: (record) => {
            // 通过 , 来确定前几行需要排除 : 数据行与标题包含的 , 数量不相同
            const lines = record.chartData.split("\n")
            while(lines[0].split(",").length<lines[1].split(",").length){
              lines.shift()
            }
            // 拼接字符串
            const tableData = lines.join("\n")
            return (
              <>
                {/*<p style={{ margin: 30 }}>{record.chartData}</p>*/}
                <DataTable tableData={tableData} />
              </>
            );
          },
          // rowExpandable: (record) => record.name !== 'Not Expandable',
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
      />
    </>
  );
};

export default UnsucceedChart;
