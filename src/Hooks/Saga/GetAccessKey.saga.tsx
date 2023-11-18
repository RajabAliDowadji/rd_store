import { takeEvery, put } from "redux-saga/effects";
import { GET_ACCESS_KEY } from "./Constant";
import { getAccessKeyAPI } from "../../services/GetAccessKey.api";
import {
  getAccessKey,
  getAccessKeySuccess,
  getAccessKeyFailure,
  internalServerFailure,
} from "../redux/GetAccessKey.redux";
import { SuccessResponseState } from "../../Modal/GetAccessKey.modal";

export function* getAccessKeyAPISaga() {
  yield put(getAccessKey());
  let result: SuccessResponseState;
  try {
    result = yield getAccessKeyAPI();
    if (result.status === 200) {
      yield put(getAccessKeySuccess(result));
    } else {
      yield put(getAccessKeyFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* getAccessKeySaga() {
  yield takeEvery(GET_ACCESS_KEY, getAccessKeyAPISaga);
}
