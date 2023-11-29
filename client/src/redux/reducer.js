import { createSlice } from "@reduxjs/toolkit";

import { getMakes } from "./operations";

const initialState = {
    carMakes: null,
    isLoading: false,
    error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMakes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getMakes.fulfilled, (state, { payload }) => {
      state.carMakes = payload.map((item) => item.name);
      state.isLoading = false;
    });
    builder.addCase(getMakes.rejected, (state, { payload }) => {
      state.error =
        payload || "Помилка, спробуйте перезавантажити сторінку."; // !!!!
        console.log("Error: ", state.error);
      state.isLoading = false;
    });
  },
});

export const carsReducer = carsSlice.reducer;