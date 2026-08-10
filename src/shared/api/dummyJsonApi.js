import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyJsonApi = createApi({
  reducerPath: "dummyJsonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getMedicine: builder.query({
      query: ({ limit = 12, skip = 0 } = {}) =>
        `/products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetMedicineQuery } = dummyJsonApi;
