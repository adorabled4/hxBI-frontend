import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

var mockData=[
  {
    "category": "数据智能",
    "date": "2000",
    "callCounts": 1211346869605.24
  },
  {
    "category": "数据智能",
    "date": "2001",
    "callCounts": 1339395718865.3
  },
  {
    "category": "数据智能",
    "date": "2002",
    "callCounts": 1470550015081.55
  },
  {
    "category": "数据智能",
    "date": "2003",
    "callCounts": 1660287965662.68
  },
  {
    "category": "数据智能",
    "date": "2004",
    "callCounts": 1955347004963.27
  },
  {
    "category": "数据智能",
    "date": "2005",
    "callCounts": 2285965892360.54
  },
  {
    "category": "数据智能",
    "date": "2006",
    "callCounts": 2752131773355.16
  },
  {
    "category": "数据智能",
    "date": "2007",
    "callCounts": 3550342425238.25
  },
  {
    "category": "数据智能",
    "date": "2008",
    "callCounts": 4594306848763.08
  },
  {
    "category": "数据智能",
    "date": "2009",
    "callCounts": 5101702432883.45
  },
  {
    "category": "数据智能",
    "date": "2010",
    "callCounts": 6087164527421.24
  },
  {
    "category": "数据智能",
    "date": "2011",
    "callCounts": 7551500425597.77
  },
  {
    "category": "数据智能",
    "date": "2012",
    "callCounts": 8532230724141.76
  },
  {
    "category": "数据智能",
    "date": "2013",
    "callCounts": 9570405758739.79
  },
  {
    "category": "数据智能",
    "date": "2014",
    "callCounts": 10438529153237.6
  },
  {
    "category": "数据智能",
    "date": "2015",
    "callCounts": 11015542352468.9
  },
  {
    "category": "数据智能",
    "date": "2016",
    "callCounts": 11137945669350.6
  },
  {
    "category": "数据智能",
    "date": "2017",
    "callCounts": 12143491448186.1
  },
  {
    "category": "数据智能",
    "date": "2018",
    "callCounts": 10108151864637.9
  },
  {
    "category": "常用功能",
    "date": "2000",
    "callCounts": 10252345464000
  },
  {
    "category": "常用功能",
    "date": "2001",
    "callCounts": 11581821399000
  },
  {
    "category": "常用功能",
    "date": "2002",
    "callCounts": 10936419054000
  },
  {
    "category": "常用功能",
    "date": "2003",
    "callCounts": 11458243878000
  },
  {
    "category": "常用功能",
    "date": "2004",
    "callCounts": 12213729147000
  },
  {
    "category": "常用功能",
    "date": "2005",
    "callCounts": 13036640229000
  },
  {
    "category": "常用功能",
    "date": "2006",
    "callCounts": 12214611414000
  },
  {
    "category": "常用功能",
    "date": "2007",
    "callCounts": 9451858650000
  },
  {
    "category": "常用功能",
    "date": "2008",
    "callCounts": 2712844084000
  },
  {
    "category": "常用功能",
    "date": "2009",
    "callCounts": 6448933025000
  },
  {
    "category": "常用功能",
    "date": "2010",
    "callCounts": 7992052727000
  },
  {
    "category": "常用功能",
    "date": "2011",
    "callCounts": 12542581104000
  },
  {
    "category": "常用功能",
    "date": "2012",
    "callCounts": 6197007349000
  },
  {
    "category": "常用功能",
    "date": "2013",
    "callCounts": 11184849190000
  },
  {
    "category": "常用功能",
    "date": "2014",
    "callCounts": 12521746534000
  },
  {
    "category": "常用功能",
    "date": "2015",
    "callCounts": 15219297584000
  },
  {
    "category": "常用功能",
    "date": "2016",
    "callCounts": 12707188235000
  },
  {
    "category": "常用功能",
    "date": "2017",
    "callCounts": 13485393853000
  },
  {
    "category": "常用功能",
    "date": "2018",
    "callCounts": 13544343456936.5
  },
  {
    "category": "生活服务",
    "date": "2000",
    "callCounts": 1657816613708.58
  },
  {
    "category": "生活服务",
    "date": "2001",
    "callCounts": 1640246149417.01
  },
  {
    "category": "生活服务",
    "date": "2002",
    "callCounts": 1784473920863.31
  },
  {
    "category": "生活服务",
    "date": "2003",
    "callCounts": 1203018775510.2
  },
  {
    "category": "生活服务",
    "date": "2004",
    "callCounts": 336931526913.22
  },
  {
    "category": "生活服务",
    "date": "2005",
    "callCounts": 7538680000000
  },
  {
    "category": "生活服务",
    "date": "2006",
    "callCounts": 2713749770009.2
  },
  {
    "category": "生活服务",
    "date": "2007",
    "callCounts": 3100882352941.18
  },
  {
    "category": "生活服务",
    "date": "2008",
    "callCounts": 2922667279411.76
  },
  {
    "category": "生活服务",
    "date": "2009",
    "callCounts": 2410909799034.12
  },
  {
    "category": "生活服务",
    "date": "2010",
    "callCounts": 2475244321361.11
  },
  {
    "category": "生活服务",
    "date": "2011",
    "callCounts": 2659310054646.23
  },
  {
    "category": "生活服务",
    "date": "2012",
    "callCounts": 2704887678386.72
  },
  {
    "category": "生活服务",
    "date": "2013",
    "callCounts": 2786022872706.81
  },
  {
    "category": "生活服务",
    "date": "2014",
    "callCounts": 3063803240208.01
  },
  {
    "category": "生活服务",
    "date": "2015",
    "callCounts": 2928591002002.51
  },
  {
    "category": "生活服务",
    "date": "2016",
    "callCounts": 2694283209613.29
  },
  {
    "category": "生活服务",
    "date": "2017",
    "callCounts": 2666229179958.01
  },
  {
    "category": "生活服务",
    "date": "2018",
    "callCounts": 2855296731521.96
  },
  {
    "category": "知识拓展",
    "date": "2000",
    "callCounts": 4659710142196.94
  },
  {
    "category": "知识拓展",
    "date": "2001",
    "callCounts": 4106602070620.5
  },
  {
    "category": "知识拓展",
    "date": "2002",
    "callCounts": 1305470494417.86
  },
  {
    "category": "知识拓展",
    "date": "2003",
    "callCounts": 6430347770731.79
  },
  {
    "category": "知识拓展",
    "date": "2004",
    "callCounts": 591016690742.8
  },
  {
    "category": "知识拓展",
    "date": "2005",
    "callCounts": 764017107992.39
  },
  {
    "category": "知识拓展",
    "date": "2006",
    "callCounts": 1989930542278.7
  },
  {
    "category": "知识拓展",
    "date": "2007",
    "callCounts": 11299705764823.62
  },
  {
    "category": "知识拓展",
    "date": "2008",
    "callCounts": 1660846387624.78
  },
  {
    "category": "知识拓展",
    "date": "2009",
    "callCounts": 1222644282201.86
  },
  {
    "category": "知识拓展",
    "date": "2010",
    "callCounts": 1524917468442.01
  },
  {
    "category": "知识拓展",
    "date": "2011",
    "callCounts": 321661732059.78
  },
  {
    "category": "知识拓展",
    "date": "2012",
    "callCounts": 210256976945.38
  },
  {
    "category": "知识拓展",
    "date": "2013",
    "callCounts": 1297128039058.21
  },
  {
    "category": "知识拓展",
    "date": "2014",
    "callCounts": 14059984158438.46
  },
  {
    "category": "知识拓展",
    "date": "2015",
    "callCounts": 1363594369577.82
  },
  {
    "category": "知识拓展",
    "date": "2016",
    "callCounts": 1282723881134.01
  },
  {
    "category": "知识拓展",
    "date": "2017",
    "callCounts": 8578624060588.26
  },
  {
    "category": "知识拓展",
    "date": "2018",
    "callCounts": 12657554647149.87
  },
]

const CallCharts: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    function scaleCallCounts(data) {
      const callCountsArray = data.map(item => item.callCounts);
      const minValue = Math.min(...callCountsArray);
      const maxValue = Math.max(...callCountsArray);

      return data.map(item => ({
        ...item,
        callCounts: (item.callCounts - minValue) / (maxValue - minValue) * 199 + 1
      }));
    }
    mockData = scaleCallCounts(mockData);
    setData(mockData)
    // asyncFetch();
  }, []);



  // 动态获取日期
  const dayMilliseconds = 24 * 60 * 60 * 1000; // 一天的毫秒数
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDay() - 19).getTime(); // 当前日期往前推 19 天

// 分组并初始化日期
  const dataByCategory = mockData.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category].push(item);
    } else {
      acc[item.category] = [item];
    }
    return acc;
  }, {});

  Object.values(dataByCategory).forEach(categoryData => {
    let currentDate = startDate;
    categoryData.forEach((item, index) => {
      if (index === 0) {
        item.date = new Date(currentDate).toISOString().slice(0, 10);
      } else {
        currentDate += dayMilliseconds; // 加上一天的毫秒数
        item.date = new Date(currentDate).toISOString().slice(0, 10);
      }
    });
  });



  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data,
    xField: 'date',
    yField: 'callCounts',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: (v: number) => `${(v / 1).toFixed(1)} 次`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

// ReactDOM.render(<CallCharts/>, document.getElementById('container'));
export default CallCharts;
