import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetMedicineByIdQuery } from "../../entities/medicine/api/medicineApi";
import { useDispatch } from "react-redux";
import { setLastProduct } from "./lastProductSlice.js";
import * as styles from "./Process.module.css";
import { DrugCard } from "@/shared/ui/cards/DrugCard";
import { AboutCard } from "@/shared/ui/cards/AboutCard";
import { AdditionalInfoCard } from "@/shared/ui/cards/AdditionalInfoCard";

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

  const title = data?.title
    ? data.title.charAt(0).toUpperCase() + data.title.slice(1) + " #" + id
    : `Untitled #${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <DrugCard
          title={title}
          startDate={data.startDate}
          endDate={data.endDate}
          description={data.location}
        />
        <AboutCard description={data.description} />
      </div>
      <div className={styles.sidebar}>
        <AdditionalInfoCard clinicName={data.location} tags={data.tags} />
      </div>
    </div>
  );
}
