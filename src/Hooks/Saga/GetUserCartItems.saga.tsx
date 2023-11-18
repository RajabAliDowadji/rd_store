import { takeEvery, put } from "redux-saga/effects";
import { GET_USER_CART_ITEMS } from "./Constant";
import { getUserCartItemsAPI } from "../../services/GetUserCartItems.api";
import {
  getUserCartItems,
  getUserCartItemsSuccess,
  getUserCartItemsFailure,
  internalServerFailure,
} from "../redux/GetUserCartItems.redux";
import { SuccessResponseState } from "../../Modal/GetUserCartItems.modal";
import { getCartItems } from "../redux/AddEditCartItems.redux";

export function* getUserCartItemsAPISaga() {
  yield put(getUserCartItems());
  let result: SuccessResponseState;
  try {
    result = yield getUserCartItemsAPI();
    if (result.status === 200) {
      yield put(getCartItems(result));
      yield put(getUserCartItemsSuccess(result));
    } else {
      yield put(getUserCartItemsFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* getUserCartItemsSaga() {
  yield takeEvery(GET_USER_CART_ITEMS, getUserCartItemsAPISaga);
}
