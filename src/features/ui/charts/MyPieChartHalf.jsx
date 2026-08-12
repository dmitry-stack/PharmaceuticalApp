import { PieChart, Pie, Tooltip } from "recharts";
import * as styles from "./MyPieChartHalf.module.css";

export function MyPieChartHalf({
  value = 70,
  other = 30,
  colors = ["#3874FF", "#ADC5FF"],
}) {
  const data = [
    { name: "Tested", value, fill: colors[0] },
    { name: "Non-Tested", value: other, fill: colors[1] },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <PieChart width={86} height={50}>
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            cx={43}
            cy={42}
            innerRadius={32}
            outerRadius={38}
            paddingAngle={2}
            stroke="none"
            cornerRadius={2}
          />
        </PieChart>
      </div>

      <div className={styles.legend}>
        <div className={`${styles.legendItem} ${styles.completed}`}>
          <span className={styles.legendLabel}>Tested</span>
          <span className={styles.legendValue}>{value}%</span>
        </div>
        <div className={`${styles.legendItem} ${styles.awaiting}`}>
          <span className={styles.legendLabel}>Non-Tested</span>
          <span className={styles.legendValue}>{other}%</span>
        </div>
      </div>
    </div>
  );
}
