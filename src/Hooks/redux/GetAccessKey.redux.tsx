import { createSlice } from "@reduxjs/toolkit";
import { GetAccessKeyState } from "../../Modal/GetAccessKey.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  access_key: null,
} as GetAccessKeyState;

const getAccessKeySlice = createSlice({
  name: "get_access_key",
  initialState,
  reducers: {
    getAccessKey(state) {
      state.isLoading = true;
    },
    getAccessKeySuccess(state, action) {
      state.access_key = action.payload.data;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isError = false;
    },
    getAccessKeyFailure(state, action) {
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
  getAccessKey,
  getAccessKeySuccess,
  getAccessKeyFailure,
  internalServerFailure,
} = getAccessKeySlice.actions;

export default getAccessKeySlice.reducer;
