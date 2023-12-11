import { createSlice } from "@reduxjs/toolkit";
import { UserAddressesState } from "../../Modal/GetUserAddresses.modal";

const initialState = {
  userAddresses: null,
  isLoading: false,
  isError: false,
  message: "",
} as UserAddressesState;

const getUserAddressesSlice = createSlice({
  name: "get_user_addresses",
  initialState,
  reducers: {
    getUserAddresses(state) {
      state.isLoading = true;
    },
    getUserAddressesSuccess(state, action) {
      state.userAddresses = action.payload.data;
      state.message = action.payload.message;
      state.isLoading = false;
      state.isError = false;
    },
    getUserAddressesFailure(state, action) {
      state.isError = true;
      state.message = action.payload.error.message;
      state.isLoading = false;
    },
    removeUserAddressById(state, action) {
      let temp: any =
        state.userAddresses !== null && state.userAddresses.user_address;
      temp = temp.filter(
        (user_address: any) => user_address._id !== action.payload.id
      );
      if (state.userAddresses !== null) {
        state.userAddresses.user_address = temp;
      }
    },
    internalServerFailure(state) {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const {
  getUserAddresses,
  getUserAddressesSuccess,
  getUserAddressesFailure,
  removeUserAddressById,
  internalServerFailure,
} = getUserAddressesSlice.actions;

export default getUserAddressesSlice.reducer;
