import { configureStore } from "@reduxjs/toolkit";
import lastProductReducer from "../../pages/process/lastProductSlice.js";
import { medicineApi } from "../../entities/medicine/api/medicineApi.js";

export const store = configureStore({
  reducer: {
    [medicineApi.reducerPath]: medicineApi.reducer,
    lastProduct: lastProductReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medicineApi.middleware),
});
