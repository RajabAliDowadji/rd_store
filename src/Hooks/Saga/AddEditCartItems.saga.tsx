import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_SINGLE_CART_ITEM,
} from "./Constant";
import {
  addProductInCart,
  removeProductInCart,
  removeSingleProductInCart,
} from "../redux/AddEditCartItems.redux";
import { AddCartItem } from "../../Modal/AddEditCartItems.modal";

export function* addCartItemSaga({
  payload,
}: {
  type: string;
  payload: AddCartItem;
}) {
  yield put(addProductInCart(payload));
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
}

export function* removeProductInCartItem() {
  yield takeEvery(REMOVE_CART_ITEM, removeProductInCartSaga);
}
