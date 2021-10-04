import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Graph = ({ data }) => {
  const [finalData, setFinalData] = React.useState([]);
  const formatData = () => {};
  React.useEffect(() => {
    if (data) {
      setFinalData(
        // loop through object
        Object.keys(data).map((key) => {
          return {
            name: new Date(
              key.substring(0, 4),
              key.substring(4, 6) - 1,
              key.substring(6, 8)
            ).toLocaleDateString(),
            T2M: data[key],
          };
        })
      );
    }
    console.log(finalData);
  }, [data]);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={1000}
        height={300}
        data={finalData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Legend />
        <Line
          type="monotone"
          dataKey="T2M"
          stroke="#FC7A1E"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export const GraphArr = ({ data, xName, name }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey={xName} />
        <YAxis />
        <Tooltip />

        <Legend />
        <Line
          type="monotone"
        dataKey={name}
          stroke="#FC7A1E"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
