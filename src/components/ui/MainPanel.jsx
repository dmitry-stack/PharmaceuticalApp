import * as styles from "./MainPanel.module.css";
import { MainSummary } from "../../features/ui/MainSummary";
import { TotalTests } from "../../features/ui/TotalTests";
import { MainPanelCard } from "../../features/ui/MainPanelCard";
import { MyLineChart } from "../../features/ui/charts/MyLineChart";
import { MyPieChart } from "../../features/ui/charts/MyPieChart";
import { MyPieChartHalf } from "../../features/ui/charts/MyPieChartHalf";
import { MyBarChart } from "../../features/ui/charts/MyBarChart";

export function MainPanel() {
  return (
    <div className={styles.mainPanel}>
      <div className={styles.column}>
        <MainSummary />
        <TotalTests />
      </div>
      <div className={styles.column}>
        <div className={styles.cardsGrid}>
          <MainPanelCard
            heading="Total Tested Drugs"
            period="Last 7 days"
            chart={<MyBarChart />}
            percentageChange="-6.8"
            total="16,247"
          />
          <MainPanelCard
            heading="Drug approval rates"
            period="Last 7 days"
            chart={<MyLineChart />}
            percentageChange="+26.5"
            total="356"
          />
          <MainPanelCard
            heading="Testing process"
            period="Last 7 days"
            chart={<MyPieChart />}
          />
          <MainPanelCard
            heading="Number of people tested"
            period="Last 7 days"
            chart={<MyPieChartHalf />}
          />
        </div>
      </div>
    </div>
  );
}
