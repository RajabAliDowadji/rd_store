import { createSlice } from "@reduxjs/toolkit";
import { UserLoginState } from "../../Modal/UserLogin.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  isLoginSuccess: false,
  userLoginResponse: {},
} as UserLoginState;

const userSlice = createSlice({
  name: "login_user",
  initialState,
  reducers: {
    getUserLogin(state) {
      state.isLoading = true;
    },
    userLoginSuccess(state, action) {
      state.userLoginResponse = action.payload;
      state.message = action.payload.message;
      state.isLoginSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    userLoginFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    userLoginResetState(state) {
      state.message = "";
      state.isLoading = false;
      state.isError = false;
      state.isLoginSuccess = false;
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  getUserLogin,
  userLoginSuccess,
  userLoginResetState,
  userLoginFailure,
  internalServerFailure,
} = userSlice.actions;
export default userSlice.reducer;
