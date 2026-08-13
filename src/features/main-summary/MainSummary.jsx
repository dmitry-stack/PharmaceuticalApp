import awaitingresults from "@shared/assets/summary/awaitingresults.svg";
import onhold from "@shared/assets/summary/onhold.svg";
import outofstock from "@shared/assets/summary/outofstock.svg";
import * as styles from "./MainSummary.module.css";
export function MainSummary() {
  return (
    <>
      <div className={styles.mainSummary}>
        <div className={styles.summaryItem}>
          <img
            src={awaitingresults}
            height="56"
            width="56"
            alt="Awaiting Results"
          />
          <div className={styles.summaryText}>
            <h2>Medicine</h2>
            <p>Awaiting results</p>
          </div>
        </div>

        <div className={styles.summaryItem}>
          <img src={onhold} height="56" width="56" alt="On Hold" />
          <div className={styles.summaryText}>
            <h2>3 vaccines</h2>
            <p>On hold</p>
          </div>
        </div>

        <div className={styles.summaryItem}>
          <img src={outofstock} height="56" width="56" alt="Out of Stock" />
          <div className={styles.summaryText}>
            <h2>15 products</h2>
            <p>Out of stock</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
