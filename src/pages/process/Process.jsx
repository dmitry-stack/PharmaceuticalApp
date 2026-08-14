import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetMedicineByIdQuery } from "../../entities/medicine/api/medicineApi";
import { useDispatch } from "react-redux";
import { setLastProduct } from "./lastProductSlice.js";
import * as styles from "./Process.module.css";
import { DrugCard } from "@/shared/ui/cards/DrugCard";
import { AboutCard } from "@/shared/ui/cards/AboutCard";
import { AdditionalInfoCard } from "@/shared/ui/cards/AdditionalInfoCard";
const aboutDescription =
  "We will be conducting clinical trials of the new drug Migracalm-X, which is designed to treat acute forms of migraines. We are going to test its effectiveness on 200 patients who have been suffering from this disorder for many years. The upcoming clinical trials will allow us to evaluate the safety and efficacy of the drug, as well as obtain important data for its registration and release on the market.";

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
      <div className={styles.mainContent}>
        <DrugCard
          title={
            data?.title
              ? data.title.charAt(0).toUpperCase() + data.title.slice(1)
              : ""
          }
          description={"Tavern on the Greend, New York"}
          date={"28th June - 2nd July 2022"}
          time={"10 am - 4 pm Eastern Daylight Time "}
          location={"434 Rockaway Ave, ,BrooklynNew York"}
          postCode={"11212-5636"}
        />
        <AboutCard description={aboutDescription} />
      </div>
      <div className={styles.sidebar}>
        <AdditionalInfoCard />
      </div>
    </div>
  );
}
