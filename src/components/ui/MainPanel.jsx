import * as styles from "./MainPanel.module.css";

export function MainPanel({ children }) {
  return <div className={styles.mainPanel}>{children}</div>;
}
