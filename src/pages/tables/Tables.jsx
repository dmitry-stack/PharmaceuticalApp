import * as styles from "./Tables.module.css";
import { Link, useSearchParams } from "react-router-dom";
import success from "../../shared/assets/tables/success.svg";
import failure from "../../shared/assets/tables/failure.svg";
import nextArrow from "../../shared/assets/tables/nextArrow.svg";
import { ProcessCell } from "./tablesCells/ProcessCell";
import { StatusCell } from "./tablesCells/StatusCell";
import { useGetMedicineQuery } from "../../entities/medicine/api/medicineApi";
import { useEffect } from "react";
const PAGE_SIZE = 6;
export function Tables() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const isViewAll = searchParams.get("viewAll") === "true";

  const skip = PAGE_SIZE * (currentPage - 1);
  const { data, error, isLoading } = useGetMedicineQuery({
    limit: isViewAll ? 0 : PAGE_SIZE,
    skip: isViewAll ? 0 : skip,
  });
  useEffect(() => {
    if (!searchParams.get("page") && !searchParams.get("viewAll")) {
      setSearchParams({ page: 1 }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;
  if (!data?.products) return null;
  const total = data.total;
  const products = data.products;
  const startItem = isViewAll ? 1 : skip + 1;
  const endItem = isViewAll ? total : Math.min(skip + PAGE_SIZE, total);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const handlePrevPage = () => {
    setSearchParams({ page: Math.max(currentPage - 1, 1) });
  };

  const handleNextPage = () => {
    setSearchParams({ page: Math.min(currentPage + 1, totalPages) });
  };

  const handleToggleViewAll = () => {
    if (isViewAll) {
      setSearchParams({ page: 1 });
    } else {
      setSearchParams({ viewAll: "true" });
    }
  };

  const actionBar = (
    <div className={styles.paginationControls}>
      <span className={styles.rangeInfo}>
        {startItem} to {endItem} items of {total}
      </span>

      <div className={styles.paginationActions}>
        <button onClick={handleToggleViewAll} className={styles.viewAllBtn}>
          {isViewAll ? "Show Paginated" : "View All"}
        </button>

        {!isViewAll && (
          <div className={styles.pageButtons}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={styles.pageBtn}
            >
              <img
                src={nextArrow}
                alt="previous"
                style={{ transform: "scaleX(-1)" }}
              />
            </button>
            <span className={styles.currentPage}>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={styles.pageBtn}
            >
              <img src={nextArrow} alt="next" />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.tableWrapper}>
      {isViewAll && <div className={styles.topActions}>{actionBar}</div>}

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
          {products.map((med) => (
            <tr key={`${med.type}-${med.id}`}>
              <th scope="row">
                <Link
                  to={`/process/${med.type}/${med.id}`}
                  className={styles.link}
                >
                  {`${med.title} #${med.id}`}
                </Link>
              </th>
              <td>{med.location}</td>
              <td>{med.startDate}</td>
              <td>{med.endDate}</td>

              <td>
                <img
                  src={med.successReaction === "success" ? success : failure}
                  alt={med.successReaction}
                />
              </td>

              <td>
                <ProcessCell
                  current={med.processCurrent}
                  total={med.processTotal}
                />
              </td>
              <td>
                <StatusCell segments={med.statusSegments} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!isViewAll && <div className={styles.bottomActions}>{actionBar}</div>}
    </div>
  );
}
