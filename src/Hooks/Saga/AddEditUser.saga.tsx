import { takeEvery, put } from "redux-saga/effects";
import { ADD_USER } from "./Constant";
import { addUserAPI } from "../../services/AddEditUser.api";
import {
  addEditUser,
  addEditUserSuccess,
  addEditUserFailure,
  internalServerFailure,
} from "../redux/AddEditUser.redux";
import {
  AddUserPayload,
  SuccessResponseState,
} from "../../Modal/AddEditUser.modal";

export function* addUserAPISaga({
  payload,
}: {
  type: string;
  payload: AddUserPayload;
}) {
  yield put(addEditUser());
  let result: SuccessResponseState;
  try {
    result = yield addUserAPI(payload);
    if (result.status === 201) {
      yield put(addEditUserSuccess(result));
    } else {
      yield put(addEditUserFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export function* addUserSaga() {
  yield takeEvery(ADD_USER, addUserAPISaga);
}
