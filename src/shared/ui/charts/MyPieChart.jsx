import { Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import * as styles from "./MyPieChart.module.css";

const data = [
  { name: "Preclinical testing", value: 72, fill: "#3874FF" },
  { name: "Clinical trials", value: 18, fill: "#ADC5FF" },
  { name: "Regulatory approval", value: 10, fill: "#0080C7" },
];

export function MyPieChart({ isAnimationActive = true }) {
  let preclinicalDataValue = 0;

  for (let part of data) {
    if (part.name === "Preclinical testing") {
      preclinicalDataValue = part.value;
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <div className={styles.centerText}>
          <span className={styles.centerTextValue}>
            {preclinicalDataValue}%
          </span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Tooltip />
            <Pie
              data={data}
              innerRadius="90%"
              outerRadius="100%"
              cornerRadius={10}
              paddingAngle={5}

              dataKey="value"
              isAnimationActive={isAnimationActive}
              stroke="none"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <div className={`${styles.legendItem} ${styles.priclinical}`}>
          <span className={styles.legendLabel}>Preclinical Testing</span>
          <span className={styles.legendValue}>72%</span>
        </div>
        <div className={`${styles.legendItem} ${styles.clinical}`}>
          <span className={styles.legendLabel}>Clinical Trials</span>
          <span className={styles.legendValue}>18%</span>
        </div>
        <div className={`${styles.legendItem} ${styles.approvals}`}>
          <span className={styles.legendLabel}>Regulatory approval</span>
          <span className={styles.legendValue}>10%</span>
        </div>
      </div>
    </div>
  );
}
