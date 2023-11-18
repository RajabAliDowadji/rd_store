import { createSlice } from "@reduxjs/toolkit";
import { GetUserItemsState } from "../../Modal/GetUserCartItems.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  isAPICalled: false,
  UserItems: null,
} as GetUserItemsState;

const getUserItemsSlice = createSlice({
  name: "get_user_items",
  initialState,
  reducers: {
    getUserCartItems(state) {
      state.isLoading = true;
    },
    getUserCartItemsSuccess(state, action) {
      state.UserItems = action.payload.data;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isAPICalled = true;
      state.isError = false;
    },
    getUserCartItemsFailure(state, action) {
      state.isError = true;
      state.isAPICalled = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
      state.isAPICalled = true;
    },
  },
});

export const {
  getUserCartItems,
  getUserCartItemsSuccess,
  getUserCartItemsFailure,
  internalServerFailure,
} = getUserItemsSlice.actions;

export default getUserItemsSlice.reducer;
