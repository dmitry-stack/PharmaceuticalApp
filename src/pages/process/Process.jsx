import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetMedicineByIdQuery } from "../../entities/medicine/api/medicineApi";
import { useDispatch } from "react-redux";
import { setLastProduct } from "./lastProductSlice.js";
import * as styles from "./Process.module.css";
import { DrugCard } from "@/shared/ui/cards/DrugCard";
export function Process() {
  const { type, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (type && id) {
      dispatch(setLastProduct({ type, id }));
    }
  }, [type, id, dispatch]);

  const { data, isLoading, error } = useGetMedicineByIdQuery(id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <DrugCard
          title={data.title.charAt(0).toUpperCase() + data.title.slice(1)}
          description={"Tavern on the Greend, New York"}
          date={"28th June - 2nd July 2022"}
          time={"10 am - 4 pm Eastern Daylight Time "}
          location={"434 Rockaway Ave, ,BrooklynNew York"}
          postCode={"11212-5636"}
        />
        <h1>
          {data.title.charAt(0).toUpperCase() + data.title.slice(1)} #{data.id}
        </h1>
      </div>
      <div className={styles.column}>
        <h1>
          {data.title.charAt(0).toUpperCase() + data.title.slice(1)} #{data.id}
        </h1>
      </div>
    </div>
  );
}
