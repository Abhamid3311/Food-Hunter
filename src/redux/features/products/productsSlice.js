import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
