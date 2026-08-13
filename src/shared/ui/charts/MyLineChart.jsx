import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import * as styles from "./MyLineChart.module.css";

const DEFAULT_LINES = [
  { dataKey: "previous", stroke: "#D8DCE8", dasharray: "2 5" },
  { dataKey: "total", stroke: "var(--color-chart-1)" },
];

export function MyLineChart({
  data = [],
  compact = false,
  lines = DEFAULT_LINES,
}) {
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
            vertical={!compact}
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
              fontSize: compact ? 12 : 16,
            }}
            interval={compact ? 10 : "preserveStartEnd"}
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

          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="linear"
              dataKey={line.dataKey}
              stroke={line.stroke}
              strokeWidth={line.strokeWidth ?? 2}
              strokeDasharray={line.dasharray}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                fill: "var(--color-surface-base)",
              }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
