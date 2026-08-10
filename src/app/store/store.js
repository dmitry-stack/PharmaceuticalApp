import { configureStore } from "@reduxjs/toolkit";
import { dummyJsonApi } from "../../shared/api/dummyJsonApi.js";

export const store = configureStore({
  reducer: {
    [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyJsonApi.middleware),
});
