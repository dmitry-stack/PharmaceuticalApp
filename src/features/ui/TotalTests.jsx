import * as styles from "./TotalTests.module.css";
import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import dropdownArrow from "../../assets/dropdown-arrow.svg";

const DATA_BY_RANGE = {
  "May 1 - 31, 2022": [
    { date: "01 May", total: 10, previous: 18 },
    { date: "03 May", total: 16, previous: 18 },
    { date: "05 May", total: 16, previous: 15 },
    { date: "07 May", total: 12, previous: 12 },
    { date: "09 May", total: 12, previous: 12 },
    { date: "11 May", total: 12, previous: 12 },
    { date: "13 May", total: 25, previous: 12 },
    { date: "15 May", total: 25, previous: 12 },
    { date: "17 May", total: 38, previous: 28 },
    { date: "19 May", total: 51, previous: 28 },
    { date: "21 May", total: 64, previous: 40 },
    { date: "23 May", total: 38, previous: 53 },
    { date: "25 May", total: 38, previous: 20 },
    { date: "27 May", total: 12, previous: 27 },
    { date: "29 May", total: 12, previous: 34 },
    { date: "31 May", total: 16, previous: 28 },
  ],
  "Jun 1 - 30, 2022": [
    { date: "01 Jun", total: 20, previous: 10 },
    { date: "05 Jun", total: 35, previous: 22 },
    { date: "10 Jun", total: 40, previous: 30 },
    { date: "15 Jun", total: 60, previous: 45 },
    { date: "20 Jun", total: 50, previous: 55 },
    { date: "25 Jun", total: 75, previous: 60 },
    { date: "30 Jun", total: 90, previous: 70 },
  ],
  "Jul 1 - 31, 2022": [
    { date: "01 Jul", total: 45, previous: 30 },
    { date: "05 Jul", total: 30, previous: 40 },
    { date: "10 Jul", total: 25, previous: 35 },
    { date: "15 Jul", total: 40, previous: 20 },
    { date: "20 Jul", total: 30, previous: 25 },
    { date: "25 Jul", total: 20, previous: 15 },
    { date: "31 Jul", total: 15, previous: 10 },
  ],
};

export function TotalTests() {
  const [selectedRange, setSelectedRange] = useState("May 1 - 31, 2022");
  const [isOpen, setIsOpen] = useState(false);
  const data = DATA_BY_RANGE[selectedRange] || [];

  return (
    <>
      <section className={styles.totalTests}>
        <header className={styles.header}>
          <div>
            <h2 className={styles.title}>Total tests</h2>

            <p className={styles.description}>
              Testing results received in all areas
            </p>
          </div>

          <div
            className={styles.dropdownContainer}
            style={{ position: "relative" }}
          >
            <button
              className={styles.datePicker}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span>{selectedRange}</span>

              <img src={dropdownArrow} height="5" width="10" alt="Arrow Down" />
            </button>
            {isOpen && (
              <ul className={styles.dropdownMenu}>
                {Object.keys(DATA_BY_RANGE).map((range) => (
                  <li key={range}>
                    <button
                      className={styles.dropdownItem}
                      onClick={() => {
                        setSelectedRange(range);
                        setIsOpen(false);
                      }}
                    >
                      {range}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>

        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 8,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                vertical={true}
                horizontal={false}
                stroke="var(--color-border-2)"
                strokeDasharray="0"
              />

              <XAxis
                dataKey="date"

                axisLine={{
                  stroke: "var(--color-border-2)",
                }}
                tickLine={false}
                tick={{
                  fill: "var(--color-text-3)",
                  fontSize: 16,
                }}
                interval="preserveStartEnd"
              />

              <YAxis hide domain={[0, "dataMax + 10"]} />

              <Tooltip
                cursor={{
                  stroke: "var(--color-border-2)",
                }}
                contentStyle={{
                  backgroundColor: "var(--color-surface-raised)",
                  border: "1px solid var(--color-border-2)",
                  borderRadius: "8px",
                }}
              />

              <Line
                type="linear"
                dataKey="total"
                stroke="var(--color-chart-1)"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 5,
                  strokeWidth: 2,
                  fill: "var(--color-surface-base)",
                }}
              />

              <Line
                type="linear"
                dataKey="previous"
                stroke="var(--color-chart-2)"
                strokeWidth={3}
                strokeDasharray="2 5"
                dot={false}
                activeDot={{
                  r: 5,
                  strokeWidth: 2,
                  fill: "var(--color-surface-base)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}
