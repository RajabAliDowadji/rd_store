import { createSlice } from "@reduxjs/toolkit";
import { DeleteUserAddressState } from "../../Modal/DeleteUserAddress.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
} as DeleteUserAddressState;

const deleteUserAddressSlice = createSlice({
  name: "delete_user_address",
  initialState,
  reducers: {
    deleteUserAddress(state) {
      state.isLoading = true;
    },
    deleteUserAddressSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.message = action.payload.message;
    },
    deleteUserAddressFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    deleteUserAddressResetState(state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  deleteUserAddress,
  deleteUserAddressSuccess,
  deleteUserAddressFailure,
  deleteUserAddressResetState,
  internalServerFailure,
} = deleteUserAddressSlice.actions;

export default deleteUserAddressSlice.reducer;
