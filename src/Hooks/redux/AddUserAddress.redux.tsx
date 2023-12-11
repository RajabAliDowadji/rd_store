import { createSlice } from "@reduxjs/toolkit";
import { AddUserAddressState } from "../../Modal/AddUserAddress.modal";

const initialState = {
  user_address: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
} as AddUserAddressState;

const addUserAddressSlice = createSlice({
  name: "add_user_address",
  initialState,
  reducers: {
    addUserAddress(state) {
      state.isLoading = true;
    },
    addUserAddressSuccess(state, action) {
      state.user_address = action.payload.data;
      state.message = action.payload.message;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    addUserAddressFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    addUserAddressResetState(state) {
      state.message = "";
      state.isLoading = false;
      state.isError = false;
      state.user_address = null;
      state.isSuccess = false;
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  addUserAddress,
  addUserAddressSuccess,
  addUserAddressFailure,
  addUserAddressResetState,
  internalServerFailure,
} = addUserAddressSlice.actions;

export default addUserAddressSlice.reducer;
