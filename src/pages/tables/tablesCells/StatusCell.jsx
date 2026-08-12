import * as styles from "./StatusCell.module.css";
export function StatusCell({ segments = [] }) {
  return (
    <div className={styles.statusContainer}>
      {segments.map((segment, index) => (
        <div
          key={index}
          className={styles.statusSegment}
          style={{
            flex: segment.value,
            backgroundColor: segment.color,
          }}
        />
      ))}
    </div>
  );
}
