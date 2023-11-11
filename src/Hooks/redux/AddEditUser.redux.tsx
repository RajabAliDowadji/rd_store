import { createSlice } from "@reduxjs/toolkit";
import { AddEditUserState } from "../../Modal/AddEditUser.modal";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
} as AddEditUserState;

const addEditUserSlice = createSlice({
  name: "add_edit_user",
  initialState,
  reducers: {
    addEditUser(state) {
      state.isLoading = true;
    },
    addEditUserSuccess(state, action) {
      state.user = action.payload.data;
      state.message = action.payload.message;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    addEditUserFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    addEditUserResetState(state) {
      state.message = "";
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  addEditUser,
  addEditUserSuccess,
  addEditUserFailure,
  addEditUserResetState,
  internalServerFailure,
} = addEditUserSlice.actions;

export default addEditUserSlice.reducer;
