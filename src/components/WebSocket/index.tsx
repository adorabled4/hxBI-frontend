import { message } from 'antd';
import {useEffect} from 'react';

const WebSocketComponent = (userId: any) => {

  useEffect(() => {
    const id = userId.userId;
    console.log(userId)
    // 创建WebSocket连接
    // const socket = new WebSocket(`ws://127.0.0.1:6848/api/websocket/\${userId}`);
    const url = 'ws://127.0.0.1:6848/api/websocket/'+id
    console.log(url)
    const socket = new WebSocket(url);

    // 处理连接成功事件
    socket.onopen = () => {
      console.log('WebSocket连接已打开');
    };

    // 处理接收到消息事件
    socket.onmessage = (event) => {
      const messageContent = event.data;
      console.log('收到消息：', messageContent);
      // 使用Ant Design的message组件显示消息
      message.success(messageContent,5)
      // 在此处处理接收到的消息
      // return <Notification message={"您的图表生成完成"} description={"请前往`我的图表页面进行查看详情`"}/>
    };

    // 处理连接关闭事件
    socket.onclose = () => {
      console.log('WebSocket连接已关闭');
    };

    // 处理错误事件
    socket.onerror = (error) => {
      console.error('WebSocket发生错误：', error);
    };

    // 在组件卸载时关闭WebSocket连接
    return () => {
      socket.close();
    };
  }, [userId]);

  return <></>;
};

export default WebSocketComponent;
