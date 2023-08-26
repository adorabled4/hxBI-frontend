import {ContactsOutlined, ClusterOutlined} from '@ant-design/icons';
import {Card, Col, Divider, Row, Tag} from 'antd';
import React, {useState} from 'react';
import {GridContent} from '@ant-design/pro-layout';
import {useRequest} from 'umi';
import type {RouteChildrenProps} from 'react-router';
import CallCharts from './components/CallCharts';
import {tabKeyType} from "@/pages/User/AccountCenter/data";
import {currentUserUsingGET} from "@/services/bi/userController";
// import {Button} from "antd/lib";
// import {currentUserUsingGET} from "@/services/gdp-ana-backend/userController";

const operationTabList = [
  {
    key: 'callCharts',
    tab: (
      <span>
        接口调用统计 <span style={{fontSize: 14}}></span>
      </span>
    ),
  },
];


const AccountCenter: React.FC<RouteChildrenProps> = () => {


  const [tabKey, setTabKey] = useState<tabKeyType>('articles');
  //  获取用户信息
  const {data: currentUser, loading} = useRequest(() => {
    return currentUserUsingGET();
  });

  //  渲染用户信息
  const renderUserInfo = ({userName, email}: Partial<API.UserVO>) => {
    return (
      // <div className={styles.detail}>
      <div>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {userName}
        </p>
        <p>
          <ClusterOutlined
            style={{
              marginRight: 8,
            }}
          />
          {email}
        </p>
      </div>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'callCharts') {
      return (<CallCharts/>);
    } else {
      return (<CallCharts/>);
    }
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={7} md={24}>
          <Card bordered={false} style={{
            height: 505,
            marginBottom: 24,
            marginLeft: 72,
            background: 'linear-gradient(to bottom, #87CEFA, #FFC0CB)'
          }} loading={loading}>
            {!loading && currentUser && (
              <div style={{marginLeft: 22}}>
                <div>
                  <div style={{}}>
                    <img alt="" src={currentUser.avatarUrl} style={{
                      objectFit: 'cover',
                      width: '104px',
                      height: '104px',
                      marginBottom: '20px',
                      borderRadius: '23px' // 图片宽度的一半
                    }}/>
                  </div>
                  {renderUserInfo(currentUser)}
                  <Tag color={'#453Fab'}>{currentUser?.gender === 1 ? "男" : "女"}丨{currentUser.phone}</Tag>
                  <br/>
                  <div style={{marginTop: 10}}>
                    <Tag color={'#F23A1A'}>邮箱: {currentUser.email}</Tag>
                  </div>

                  {/*<div style={{marginTop: 20}}>*/}
                  {/*  <Button color={'#F23A1A'} onClick={handleShowKeys}>申请专属AccessKey/SecretKey</Button>*/}
                  {/*</div>*/}
                  <br/>
                </div>
                <Divider dashed/>
                <Divider style={{marginTop: 16}} dashed/>
                {/* onCancel={() => setShowKeys(false)}*/}
                {/*{ShowAKSK(currentUser)}*/}
              </div>
            )}
          </Card>
        </Col>
        <Col lg={17} md={24}>
          <Card
            bordered={false}
            tabList={operationTabList}
            defaultActiveTabKey={'callCharts'}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default AccountCenter;
