// const rawData = `
// 指标,2020年,2019年,2018年
// 平均每天能源消费量(万吨标准煤),1361.5,1335.6,1292.9
// 平均每天煤炭消费量(万吨),1106.2,1101.1,1088.9
// 平均每天焦炭消费量(万吨),132,127.2,119.8
// 平均每天原油消费量(万吨),189.8,184.3,172.6
// `;

const DataTable = (tableData) => {
  // 组件传过来的都是一个对象, 而不是一个字符串
  const lines = tableData.tableData.trim().split('\n');
  const headers = lines[0].split(',');
  const data = lines.slice(1).map((line) => {
    const values = line.split(',');
    const entry = {};
    for (let i = 0; i < headers.length; i++) {
      entry[headers[i]] = values[i];
    }
    return entry;
  });

  return (
    <table>
      <thead>
      <tr>
        {Object.keys(data[0]).map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.map((entry, index) => (
        <tr key={index}>
          {Object.values(entry).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default DataTable;
