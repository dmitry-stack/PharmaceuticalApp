import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mapProductToMedicalData = (product) => {
  const isEven = product.id % 2 === 0;

  const type = isEven ? "medicine" : "vaccine";
  const namePrefix = isEven ? "Medicine" : "Vaccine";

  const total = 600;
  const current = Math.min(total, ((product.id * 37) % total) + 100);

  return {
    id: product.id,
    type: type,
    title: namePrefix,
    location: product.category
      ? `${product.category.toUpperCase()} Clinic`
      : "Serenity Health Clinic",
    startDate: "Dec 12, 2018",
    endDate: "Dec 12, 2026",
    successReaction: product.rating > 4.5 ? "success" : "failure",
    processCurrent: current,
    processTotal: total,

    statusSegments: [
      { value: ((product.id * 7) % 30) + 10, color: "var(--status-segment-1)" },
      { value: ((product.id * 3) % 15) + 5, color: "var(--status-segment-2)" },
      {
        value: ((product.id * 11) % 40) + 10,
        color: "var(--status-segment-3)",
      },
      { value: ((product.id * 5) % 20) + 10, color: "var(--status-segment-4)" },
    ],
  };
};
export const medicineApi = createApi({
  reducerPath: "medicineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getMedicine: builder.query({
      query: ({ limit = 6, skip = 0 } = {}) =>
        `products?limit=${limit}&skip=${skip}`,
      transformResponse: (response) => {
        return {
          ...response,
          products: response.products.map(mapProductToMedicalData),
        };
      },
    }),
    getMedicineById: builder.query({
      query: (id) => `products/${id}`,
      transformResponse: (response) => {
        return mapProductToMedicalData(response);
      },
    }),
  }),
});

export const { useGetMedicineQuery, useGetMedicineByIdQuery } = medicineApi;
