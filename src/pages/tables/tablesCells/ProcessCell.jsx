import * as styles from "./ProcessCell.module.css";
export function ProcessCell({ current, total = 600 }) {
  const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className={styles.processWrapper}>
      <span className={styles.processText}>
        {current} / {total}
      </span>
      <div className={styles.processTrack}>
        <div
          className={styles.processFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
