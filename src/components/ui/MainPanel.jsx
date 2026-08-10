import * as styles from "./MainPanel.module.css";
import { MainSummary } from "../../features/ui/MainSummary";

export function MainPanel() {
  return (
    <div className={styles.mainPanel}>
      <div className={styles.column}>
        <MainSummary />
      </div>
      <div className={styles.column}>Column 2</div>
    </div>
  );
}
