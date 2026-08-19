import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import * as styles from "./MyBarChart.module.css";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const maxPv = Math.max(...data.map((entry) => entry.pv));
const chartData = data.map((entry) => ({
  ...entry,
  fillValue: entry.pv,
  emptyValue: maxPv - entry.pv,
}));
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const item = payload[0].payload;

    return (
      <div className={styles.tooltipCard}>
        <span className={styles.tooltipHeader}>{item.name}</span>
        <div className={styles.tooltipBody}>
          <span className={styles.tooltipDot} />
          <span className={styles.tooltipLabel}>PV</span>
          <span className={styles.tooltipValue}>
            {item.pv.toLocaleString()}
          </span>
        </div>
      </div>
    );
  }
  return null;
}

export function MyBarChart() {
  return (
    <div className={styles.container}>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width={100} height={80}>
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="30%"
          >
            <Tooltip
              cursor={{ fill: "transparent" }}

              content={<CustomTooltip />}
            />
            <Bar
              dataKey="fillValue"
              stackId="a"
              fill="#3874FF"
              barSize={4}
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="emptyValue"
              stackId="a"
              fill="#E5EDFF"
              barSize={4}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <div className={`${styles.legendItem} ${styles.completed}`}>
          <span className={styles.legendLabel}>Completed</span>
          <span className={styles.legendValue}>52%</span>
        </div>
        <div className={`${styles.legendItem} ${styles.awaiting}`}>
          <span className={styles.legendLabel}>Awaiting results</span>
          <span className={styles.legendValue}>48%</span>
        </div>
      </div>
    </div>
  );
}
