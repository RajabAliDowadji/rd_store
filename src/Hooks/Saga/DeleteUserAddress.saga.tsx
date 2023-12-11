import { takeEvery, put } from "redux-saga/effects";
import { DELETE_USER_ADDRESS } from "./Constant";
import { deleteUserAddressAPI } from "../../services/DeleteUserAddress.api";
import {
  deleteUserAddress,
  deleteUserAddressSuccess,
  deleteUserAddressFailure,
  internalServerFailure,
} from "../redux/DeleteUserAddress.redux";
import {
  SuccessResponseState,
  DeleteUserAddressPayload,
} from "../../Modal/DeleteUserAddress.modal";
import { removeUserAddressById } from "../redux/GetUserAddresses.redux";

export function* deleteUserAddressAPISaga({
  payload,
}: {
  type: string;
  payload: DeleteUserAddressPayload;
}) {
  yield put(deleteUserAddress());
  let result: SuccessResponseState;
  try {
    yield put(removeUserAddressById(payload));
    result = yield deleteUserAddressAPI(payload);
    if (result.status === 200) {
      yield put(deleteUserAddressSuccess(result));
    } else {
      yield put(deleteUserAddressFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* deleteUserAddressSaga() {
  yield takeEvery(DELETE_USER_ADDRESS, deleteUserAddressAPISaga);
}
