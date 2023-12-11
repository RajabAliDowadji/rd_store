import { takeEvery, put } from "redux-saga/effects";
import { ADD_USER_ADDRESS } from "./Constant";
import {
  addUserAddress,
  addUserAddressSuccess,
  addUserAddressFailure,
  internalServerFailure,
} from "../redux/AddUserAddress.redux";
import { addUserAddressAPI } from "../../services/AddUserAddress.api";
import {
  AddUserAddressPayload,
  SuccessResponseState,
} from "../../Modal/AddUserAddress.modal";

export function* addUserAddressAPISaga({
  payload,
}: {
  type: string;
  payload: AddUserAddressPayload;
}) {
  yield put(addUserAddress());
  try {
    let result: SuccessResponseState;
    result = yield addUserAddressAPI(payload);
    if (result.status === 200) {
      yield put(addUserAddressSuccess(result));
    } else {
      yield put(addUserAddressFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* addUserAddressSaga() {
  yield takeEvery(ADD_USER_ADDRESS, addUserAddressAPISaga);
}
