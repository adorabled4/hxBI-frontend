import { updateUserInfoUsingPOST } from '@/services/bi/userController';
import { AntDesignOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Avatar, Button, Form, Input, InputNumber, message } from 'antd';
import { Cascader, DatePicker, Select } from 'antd/lib';
import React from 'react';

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
    const selectedAddress = values.user.address; // 获取用户选择的地址数组
    if (selectedAddress) {
      const province = selectedAddress[0];
      const city = selectedAddress[1];
      const fullAddress = `${province} ${city}`;
      // 拼接省份和市区
      const formData = {
        ...values.user, // 保留其他参数
        address: fullAddress, // 添加拼接后的地址
      };
      const res = await updateUserInfoUsingPOST(formData);
      if (res.code === 200) {
        message.success('更新成功!');
      } else {
        message.error(res.description);
      }
    }else{
      const res = await updateUserInfoUsingPOST(values.user);
      if (res.code === 200) {
        message.success('更新成功!');
      } else {
        message.error(res.description);
      }
    }
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src={currentUser.avatarUrl}
        />
      </Form.Item>
      {/*<AvatarUpload />*/}
      <Form.Item
        name={['user', 'userName']}
        label="昵称"
        rules={[{ required: true }]}
        initialValue={currentUser.userName}
      >
        <Input />
      </Form.Item>
      {/*<Form.Item*/}
      {/*  name={['user', 'email']}*/}
      {/*  label="邮箱(用于登录)"*/}
      {/*  rules={[{ type: 'email' }]}*/}
      {/*  initialValue={currentUser.email}*/}
      {/*>*/}
      {/*  <Input />*/}
      {/*</Form.Item>*/}
      <Form.Item
        name={['user', 'age']}
        label="年龄"
        rules={[{ type: 'number', min: 0, max: 99 }]}
        initialValue={currentUser.age}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'gender']} label="性别" initialValue={currentUser.gender}>
        <Select>
          <Select.Option value={1}>男</Select.Option>
          <Select.Option value={0}>女</Select.Option>
        </Select>
      </Form.Item>

      {/*<Form.Item name={['user', 'address']} label="所在地址" initialValue={currentUser.address}>*/}
      {/*  <Input />*/}
      {/*</Form.Item>*/}
      <Form.Item
        name={['user', 'address']}
        label="所在地址"
        initialValue={currentUser.address}
        rules={[{ required: false, message: '请选择地址' }]}
      >
        <Cascader
          options={addressOptions} // 这是您提供的级联数据，后面会解释如何准备这个数据
          placeholder="请选择地址"
        />
      </Form.Item>

      <Form.Item name={['user', 'phone']} label="电话" initialValue={currentUser.phone}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'birth']} label={'出生日期'}>
        <DatePicker showTime />
      </Form.Item>
      {/*<Form.Item name={['user', 'introduction']} label="Introduction" initialValue={currentUser.phone}>*/}
      {/*  <Input.TextArea/>*/}
      {/*</Form.Item>*/}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateUser;
