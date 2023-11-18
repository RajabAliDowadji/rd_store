import { takeEvery, put } from "redux-saga/effects";
import { ORDER_PLACED } from "./Constant";
import { orderPlacedAPI } from "../../services/OrderPlaced.api";
import {
  orderPlaced,
  orderPlacedSuccess,
  orderPlacedFailure,
  internalServerFailure,
} from "../redux/OrderPlaced.redux";
import { SuccessResponseState } from "../../Modal/OrderPlaced.modal";
import { getCartItems } from "../redux/AddEditCartItems.redux";

export function* OrderPlacedAPISaga() {
  yield put(orderPlaced());
  let result: SuccessResponseState;
  try {
    result = yield orderPlacedAPI();
    if (result.status === 200) {
      yield put(getCartItems(result));
      yield put(orderPlacedSuccess(result));
    } else {
      yield put(orderPlacedFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* OrderPlacedSaga() {
  yield takeEvery(ORDER_PLACED, OrderPlacedAPISaga);
}
