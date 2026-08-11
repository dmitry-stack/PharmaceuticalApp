import * as styles from "./MainPanelCard.module.css";

export function MainPanelCard({
  heading,
  period,
  chart,
  percentageChange = "",
  total = "",
}) {
  return (
    <div className={styles.mainPanelCard}>
      <div className={styles.heading}>
        <h2>{heading}</h2>

        <div className={styles.headingRight}>
          {percentageChange && (
            <span className={styles.percentageChange}>{percentageChange}%</span>
          )}
          {total && <span className={styles.total}>{total}</span>}
        </div>
      </div>

      <p className={styles.period}>{period}</p>

      <div className={styles.chartWrapper}>{chart}</div>
    </div>
  );
}
