import * as styles from "./MainPanel.module.css";
import { MainSummary } from "../../features/ui/MainSummary";
import { TotalTests } from "../../features/ui/TotalTests";

export function MainPanel() {
  return (
    <div className={styles.mainPanel}>
      <div className={styles.column}>
        <MainSummary />
        <TotalTests />
      </div>
      <div className={styles.column}>Column 2</div>
    </div>
  );
}
