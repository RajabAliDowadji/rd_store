import { createSlice } from "@reduxjs/toolkit";
import { AddBulkCartItemsState } from "../../Modal/AddBulkCartItems.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  cart_items: [],
} as AddBulkCartItemsState;

const addBulkCartItemslice = createSlice({
  name: "add_bulk_cart_items",
  initialState,
  reducers: {
    addBulkCartItem(state) {
      state.isLoading = true;
    },
    addBulkCartItemsSuccess(state, action) {
      state.cart_items = action.payload.data;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isError = false;
    },
    addBulkCartItemsFailure(state, action) {
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
  addBulkCartItem,
  addBulkCartItemsSuccess,
  addBulkCartItemsFailure,
  internalServerFailure,
} = addBulkCartItemslice.actions;

export default addBulkCartItemslice.reducer;
