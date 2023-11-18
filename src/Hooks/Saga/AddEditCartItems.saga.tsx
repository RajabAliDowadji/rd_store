import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_SINGLE_CART_ITEM,
} from "./Constant";
import {
  addEditCartItemsFailure,
  addEditCartItemsSuccess,
  addProductInCart,
  internalServerFailure,
  removeProductInCart,
  removeSingleProductInCart,
} from "../redux/AddEditCartItems.redux";
import {
  AddCartItem,
  SuccessResponseState,
} from "../../Modal/AddEditCartItems.modal";
import {
  addCartItemsAPI,
  removeCartItemInAPI,
  removeItemInAPI,
} from "../../services/AddEditCartItems.api";

export function* addCartItemSaga({
  payload,
}: {
  type: string;
  payload: AddCartItem;
}) {
  yield put(addProductInCart(payload));
  let result: SuccessResponseState;
  try {
    result = yield addCartItemsAPI(payload);
    if (result.status === 201) {
      yield put(addEditCartItemsSuccess(result));
    } else {
      yield put(addEditCartItemsFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export function* addCartItem() {
  yield takeEvery(ADD_CART_ITEM, addCartItemSaga);
}

export function* removeSingleItemSaga({
  payload,
}: {
  type: string;
  payload: AddCartItem;
}) {
  yield put(removeSingleProductInCart(payload));
  let result: SuccessResponseState;
  try {
    result = yield removeCartItemInAPI(payload);
    if (result.status === 201) {
      yield put(addEditCartItemsSuccess(result));
    } else {
      yield put(addEditCartItemsFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export function* removeSingleCartItem() {
  yield takeEvery(REMOVE_SINGLE_CART_ITEM, removeSingleItemSaga);
}

export function* removeProductInCartSaga({
  payload,
}: {
  type: string;
  payload: AddCartItem;
}) {
  yield put(removeProductInCart(payload));
  let result: SuccessResponseState;
  try {
    result = yield removeItemInAPI(payload);
    if (result.status === 201) {
      yield put(addEditCartItemsSuccess(result));
    } else {
      yield put(addEditCartItemsFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export function* removeProductInCartItem() {
  yield takeEvery(REMOVE_CART_ITEM, removeProductInCartSaga);
}
