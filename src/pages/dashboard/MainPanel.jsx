import * as styles from "./MainPanel.module.css";
import { MainSummary } from "../../features/main-summary/MainSummary";
import { TotalTests } from "../../features/total-tests/TotalTests";
import { MainPanelCard } from "../../shared/ui/cards/MainPanelCard";
import { MyLineChart } from "../../shared/ui/charts/MyLineChart";
import { MyPieChart } from "../../shared/ui/charts/MyPieChart";
import { MyPieChartHalf } from "../../shared/ui/charts/MyPieChartHalf";
import { MyBarChart } from "../../shared/ui/charts/MyBarChart";

const dataCompact = [
  { date: "01 Jul", total: 45, previous: 30 },
  { date: "05 Jul", total: 30, previous: 40 },
  { date: "10 Jul", total: 25, previous: 35 },
  { date: "15 Jul", total: 40, previous: 20 },
  { date: "20 Jul", total: 30, previous: 25 },
  { date: "25 Jul", total: 20, previous: 15 },
  { date: "31 Jul", total: 15, previous: 10 },
];
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
            chart={<MyLineChart data={dataCompact} compact={true} />}
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
