import { takeEvery, put } from "redux-saga/effects";
import { ADD_BULK_CART_ITEMS } from "./Constant";
import {
  addBulkCartItem,
  addBulkCartItemsFailure,
  addBulkCartItemsSuccess,
  internalServerFailure,
} from "../redux/AddBulkCartItems.redux";
import {
  AddBulkCartItem,
  SuccessResponseState,
} from "../../Modal/AddBulkCartItems.modal";

import { addBulkCartItemsAPI } from "../../services/AddBulkCartItems.api";

export function* addBulkCartItemsSaga({
  payload,
}: {
  type: string;
  payload: AddBulkCartItem[];
}) {
  yield put(addBulkCartItem());
  let result: SuccessResponseState;
  try {
    result = yield addBulkCartItemsAPI(payload);
    if (result.status === 201) {
      yield put(addBulkCartItemsSuccess(result));
    } else {
      yield put(addBulkCartItemsFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export function* addBulkCartItems() {
  yield takeEvery(ADD_BULK_CART_ITEMS, addBulkCartItemsSaga);
}
