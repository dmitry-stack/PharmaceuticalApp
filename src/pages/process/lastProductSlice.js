import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const saved = localStorage.getItem("lastOpenProduct");
  return saved ? JSON.parse(saved) : null;
};

export const lastProductSlice = createSlice({
  name: "lastProduct",
  initialState: getInitialState(),
  reducers: {
    setLastProduct: (state, action) => {
      if (action.payload?.id) {
        localStorage.setItem("lastOpenProduct", JSON.stringify(action.payload));
      }
      return action.payload;
    },
  },
});

export const { setLastProduct } = lastProductSlice.actions;

export default lastProductSlice.reducer;
