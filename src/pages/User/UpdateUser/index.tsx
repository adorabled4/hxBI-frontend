import { updateUserInfoUsingPOST } from '@/services/bi/userController';
import { AntDesignOutlined, UploadOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import {Avatar, Button, Card, Col, Form, Input, message, Row, Upload} from 'antd';
import { Cascader, DatePicker, Select } from 'antd/lib';
import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn'; // 导入需要的本地化语言包，这里使用中文简体作为示例

// 配置日期本地化
moment.locale('zh-cn'); // 设置为中文简体

// 在需要的地方使用 DatePicker 组件

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const addressOptions = [
  {
    value: '北京市',
    label: '北京市',
    children: [
      {
        value: '东城区',
        label: '东城区',
      },
      {
        value: '海淀区',
        label: '海淀区',
      },
      {
        value: '望京',
        label: '望京',
      },
      // 其他区级选项
    ],
  },
  {
    value: '上海市',
    label: '上海市',
    children: [
      {
        value: '黄浦区',
        label: '黄浦区',
      },
      // 其他区级选项
    ],
  },
  // 其他省份
  {
    value: '广东省',
    label: '广东省',
    children: [
      {
        value: '广州市',
        label: '广州市',
      },
      // 其他市级选项
    ],
  },
  {
    value: '河南省',
    label: '河南省',
    children: [
      {
        value: '郑州市',
        label: '郑州市',
      },
      // 其他市级选项
    ],
  },
  {
    value: '山东省',
    label: '山东省',
    children: [
      {
        value: '济南市',
        label: '济南市',
      },
      // 其他市级选项
    ],
  },
  {
    value: '福建省',
    label: '福建省',
    children: [
      {
        value: '厦门市',
        label: '厦门市',
      },
      // 其他市级选项
    ],
  },
  // 其他省份
  // ...继续添加其他省份
];

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

/* eslint-enable no-template-curly-in-string */

const UpdateUser: React.FC = () => {
  // 获取当前用户信息
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const onFinish = async (values: any) => {
    console.log(values);
    const selectedAddress = values.address; // 获取用户选择的地址数组
    if (selectedAddress) {
      const province = selectedAddress[0];
      const city = selectedAddress[1];
      const fullAddress = `${province} ${city}`;
      // 拼接省份和市区
      values.address = fullAddress;
    }
    // 格式化日期
    const formattedBirth = new Date(values.birth).toDateString();
    // 构建参数对象，根据用户是否上传了头像来决定是否包含 file 参数
    const params: any = {
      ...values,
      birth: formattedBirth, // 使用格式化后的日期
    };

    if (values.file) {
      params.file = values.file.file.originFileObj;
    }
    console.log(params);
    const res = await updateUserInfoUsingPOST(params, {}, params.file);
    if (res.code === 200) {
      message.success('更新成功!');
    }
  };
  return (
     <Row>
       <Col offset={2} md={12}>
         <Card>
           <Form
             {...layout}
             name="nest-messages"
             onFinish={onFinish}
             style={{ maxWidth: 600 }}
             validateMessages={validateMessages}
           >
             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
               <Row>
                 <Col>
                   <Avatar
                     size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                     icon={<AntDesignOutlined />}
                     src={currentUser.avatarUrl}
                   />
                 </Col>
               </Row>
             </Form.Item>
             <Form.Item name="file" label="更新头像">
               <Upload name="file" maxCount={1}>
                 <Button icon={<UploadOutlined />}>点击上传</Button>
               </Upload>
             </Form.Item>
             {/*<UploadAvatar />*/}
             <Form.Item
               name={'userName'}
               label="昵称"
               rules={[{ required: true }]}
               initialValue={currentUser.userName}
             >
               <Input />
             </Form.Item>
             {/*<Form.Item*/}
             {/*  name={'age'}*/}
             {/*  label="年龄"*/}
             {/*  rules={[{ type: 'number', min: 0, max: 99 }]}*/}
             {/*  initialValue={currentUser.age}*/}
             {/*>*/}
             {/*  <InputNumber />*/}
             {/*</Form.Item>*/}
             <Form.Item name={'gender'} label="性别" initialValue={currentUser.gender}>
               <Select>
                 <Select.Option value={1}>男</Select.Option>
                 <Select.Option value={0}>女</Select.Option>
               </Select>
             </Form.Item>

             <Form.Item
               name={'address'}
               label="所在地址"
               initialValue={currentUser.address}
               rules={[{ required: false, message: '请选择地址' }]}
             >
               <Cascader
                 options={addressOptions} // 这是您提供的级联数据，后面会解释如何准备这个数据
                 placeholder="请选择地址"
               />
             </Form.Item>

             <Form.Item name={'phone'} label="电话" initialValue={currentUser.phone}>
               <Input />
             </Form.Item>
             <Form.Item name={'birth'} label={'出生日期'} initialValue={moment()} >
               <DatePicker showTime />
             </Form.Item>
             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
               <Button type="primary" htmlType="submit">
                 保存
               </Button>
             </Form.Item>
           </Form>
         </Card>
       </Col>
     </Row>
  );
};

export default UpdateUser;
