import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import * as styles from "./MyLineChart.module.css";

const data = [
  { date: "01 Jul", total: 45, previous: 30 },
  { date: "05 Jul", total: 30, previous: 40 },
  { date: "10 Jul", total: 25, previous: 35 },
  { date: "15 Jul", total: 40, previous: 20 },
  { date: "20 Jul", total: 30, previous: 25 },
  { date: "25 Jul", total: 20, previous: 15 },
  { date: "31 Jul", total: 15, previous: 10 },
];
export function MyLineChart() {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 8,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={false}
            stroke="var(--color-border-2)"
            strokeDasharray="0"
          />

          <XAxis
            dataKey="date"

            axisLine={{
              stroke: "var(--color-border-2)",
            }}
            tickLine={false}
            tick={{
              fill: "var(--color-text-3)",
              fontSize: 16,
            }}
            interval={10}
          />

          <YAxis hide domain={[0, "dataMax + 10"]} />

          <Tooltip
            cursor={{
              stroke: "var(--color-border-2)",
            }}
            contentStyle={{
              backgroundColor: "var(--color-surface-raised)",
              border: "1px solid var(--color-border-2)",
              borderRadius: "8px",
            }}
          />
          <Line
            type="linear"
            dataKey="previous"
            stroke="#D8DCE8"
            strokeWidth={2}

            dot={false}
            activeDot={{
              r: 5,
              strokeWidth: 2,
              fill: "var(--color-surface-base)",
            }}
          />

          <Line
            type="linear"
            dataKey="total"
            stroke="var(--color-chart-1)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              strokeWidth: 2,
              fill: "var(--color-surface-base)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
