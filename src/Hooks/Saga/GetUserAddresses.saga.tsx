import { takeEvery, put } from "redux-saga/effects";
import { GET_USER_ADDRESSES } from "./Constant";
import {
  getUserAddresses,
  getUserAddressesSuccess,
  getUserAddressesFailure,
  internalServerFailure,
} from "../redux/GetUserAddresses.redux";
import {
  GetProductQueryPayloads,
  SuccessResponseState,
} from "../../Modal/GetProducts.modal";
import { getUserAddressesAPI } from "../../services/GetUserAddresses.api";

export function* getUserAddressesAPISaga({
  payload,
}: {
  type: string;
  payload: GetProductQueryPayloads;
}) {
  yield put(getUserAddresses());
  let result: SuccessResponseState;
  try {
    result = yield getUserAddressesAPI(payload);
    if (result.status === 200) {
      yield put(getUserAddressesSuccess(result));
    } else {
      yield put(getUserAddressesFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export default function* getUserAddressesSaga() {
  yield takeEvery(GET_USER_ADDRESSES, getUserAddressesAPISaga);
}
