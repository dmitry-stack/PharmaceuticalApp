import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetMedicineByIdQuery } from "../../entities/medicine/api/medicineApi";
import { useSelector, useDispatch } from "react-redux";
import { setLastProduct } from "./lastProductSlice.js";
import * as styles from "./Process,module.css";
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
    <div>
      <h1>
        {data.title.charAt(0).toUpperCase() + data.title.slice(1)} #{data.id}
      </h1>
    </div>
  );
}
