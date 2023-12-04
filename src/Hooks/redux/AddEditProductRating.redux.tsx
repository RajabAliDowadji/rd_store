import { createSlice } from "@reduxjs/toolkit";
import { AddEditProductRatingState } from "../../Modal/AddEditProductRating.modal";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
} as AddEditProductRatingState;

const addProductRatinglice = createSlice({
  name: "add_product_rating",
  initialState,
  reducers: {
    addProductRatingStart(state) {
      state.isLoading = true;
    },
    addProductRatingSuccess(state, action) {
      state.message = action.payload.message;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    addProductRatingFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    addEditProductRatingResetState(state) {
      state.message = "";
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  addProductRatingStart,
  addProductRatingSuccess,
  addProductRatingFailure,
  addEditProductRatingResetState,
  internalServerFailure,
} = addProductRatinglice.actions;

export default addProductRatinglice.reducer;
