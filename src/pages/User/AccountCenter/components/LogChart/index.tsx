import { getLastDayLogUsingGET } from '@/services/bi/chartLogController';
import { Line} from '@ant-design/plots';
import { Select } from 'antd';
import { useEffect, useState } from 'react';

const LogChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 定义一个函数来获取日志数据
    const fetchData = async () => {
      try {
        const response = await getLastDayLogUsingGET({ count: 10 });
        console.log(response)
        if (response && response.code === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching log data:', error);
      }
    };
    fetchData(); // 在日期范围变化时触发数据请求
  }, []);

  // 更新数据
  const handleChange = async (value: number) => {
    const response = await getLastDayLogUsingGET({ count: value });
    console.log(response)
    if (response && response.code === 200) {
      setData(response.data);
    }
  };

// 格式化 createTime 字段为 "YYYY-M-D" 格式
  data.forEach((item) => {
    const date = new Date(item.createTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 月份从 0 开始，所以需要加 1
    const day = date.getDate();
    item.formattedCreateTime = `${year}-${month}-${day}`;
  });

  const config = {
    data,
    xField: 'formattedCreateTime',
    yField: 'count',
    seriesField: 'result',
    xAxis: {
      label: {
        formatter: (v) => v, // 如果已经格式化，可以不再格式化
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
    annotations: [
      // 低于中位数颜色变化
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: {
          textBaseline: 'bottom',
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
    stepType: 'vh',
    padding: 'auto',
  };



  return (
    <>
      <Select
        defaultValue="过去7天"
        style={{ width: 120 }}
        onChange={handleChange}
        bordered={true}
        options={[
          { value: 7, label: '过去7天' },
          { value: 10, label: '过去10天' },
          { value: 30, label: '过去30天' },
          { value: 60, label: '过去60天' },
          { value: 90, label: '过去90天' },
        ]}
      />
      <Line {...config} />;
    </>
  );
};

export default LogChart;
