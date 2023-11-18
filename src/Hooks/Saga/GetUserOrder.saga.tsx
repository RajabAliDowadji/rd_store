import { takeEvery, put } from "redux-saga/effects";
import { GET_USER_ORDER } from "./Constant";
import { getUserOrderAPI } from "../../services/GetUserOrder.api";
import {
  getUserOrder,
  getUserOrderSuccess,
  getUserOrderFailure,
  internalServerFailure,
} from "../redux/GetUserOrder.redux";
import { SuccessResponseState } from "../../Modal/GetUserOrder.modal";

export function* getUserOrderAPISaga() {
  yield put(getUserOrder());
  let result: SuccessResponseState;
  try {
    result = yield getUserOrderAPI();
    if (result.status === 200) {
      yield put(getUserOrderSuccess(result));
    } else {
      yield put(getUserOrderFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* getUserOrderSaga() {
  yield takeEvery(GET_USER_ORDER, getUserOrderAPISaga);
}
