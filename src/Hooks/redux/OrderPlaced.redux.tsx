import { createSlice } from "@reduxjs/toolkit";
import { OrderPlacedState } from "../../Modal/OrderPlaced.modal";

const initialState = {
  orderDetails: null,
  isLoading: false,
  isError: false,
  message: "",
} as OrderPlacedState;

const orderPlacedSlice = createSlice({
  name: "order_placed",
  initialState,
  reducers: {
    orderPlaced(state) {
      state.isLoading = true;
    },
    orderPlacedSuccess(state, action) {
      state.orderDetails = action.payload.data;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isError = false;
    },
    orderPlacedFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    orderPlacedResetState(state) {
      state.orderDetails = null;
      state.message = "";
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
  orderPlaced,
  orderPlacedSuccess,
  orderPlacedFailure,
  orderPlacedResetState,
  internalServerFailure,
} = orderPlacedSlice.actions;

export default orderPlacedSlice.reducer;
