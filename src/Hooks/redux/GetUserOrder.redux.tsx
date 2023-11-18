import { createSlice } from "@reduxjs/toolkit";
import { GetUserOrderState } from "../../Modal/GetUserOrder.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  userOrder: null,
} as GetUserOrderState;

const getUserItemsSlice = createSlice({
  name: "get_user_order",
  initialState,
  reducers: {
    getUserOrder(state) {
      state.isLoading = true;
    },
    getUserOrderSuccess(state, action) {
      state.userOrder = action.payload.data;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isError = false;
    },
    getUserOrderFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  getUserOrder,
  getUserOrderSuccess,
  getUserOrderFailure,
  internalServerFailure,
} = getUserItemsSlice.actions;

export default getUserItemsSlice.reducer;
