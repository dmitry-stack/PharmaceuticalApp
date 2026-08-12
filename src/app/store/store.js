import { configureStore } from "@reduxjs/toolkit";
import { medicineApi } from "../../entities/medicine/api/medicineApi.js";

export const store = configureStore({
  reducer: {
    [medicineApi.reducerPath]: medicineApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medicineApi.middleware),
});
