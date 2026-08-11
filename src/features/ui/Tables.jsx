import * as styles from "./Tables.module.css";
import { Link } from "react-router-dom";
export function Tables() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.container}>
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">LOCATION</th>
            <th scope="col">START DATE</th>
            <th scope="col">END DATE</th>
            <th scope="col">SUCCESS REACTION</th>
            <th scope="col">PROCESS</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <Link to="/process/medicine/47890" className={styles.link}>
                Medicine #47890
              </Link>
            </th>
            <td>Serenity Health Clinic</td>
            <td>Dec 12, 2018</td>
            <td>Dec 12, 2026</td>

            <td>85%</td>
            <td>Phase 2</td>
            <td>In Progress</td>
          </tr>

          <tr>
            <th scope="row">
              <Link to="/process/vaccine/122" className={styles.link}>
                Vaccine #122
              </Link>
            </th>
            <td>City Hospital</td>
            <td>Jan 10, 2020</td>
            <td>Mar 15, 2022</td>
            <td>95%</td>
            <td>Phase 3</td>
            <td>Completed</td>
          </tr>

          <tr>
            <th scope="row">
              <Link to="/process/medicine/56813" className={styles.link}>
                Medicine #56813
              </Link>
            </th>
            <td>Global Labs</td>
            <td>Feb 20, 2022</td>
            <td>Feb 20, 2023</td>
            <td>60%</td>
            <td>Phase 1</td>
            <td>On Hold</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7" className={styles.footerCell}>
              1 to 3 items of 6
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
