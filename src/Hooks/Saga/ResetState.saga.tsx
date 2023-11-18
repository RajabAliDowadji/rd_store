import { takeEvery, put } from "redux-saga/effects";
import { RESET_STATE } from "./Constant";
import { getPlaceResetState } from "../redux/GetPlace.redux";
import { getProductCategoryByIdResetState } from "../redux/GetProductCategoryById.redux";
import { getProductSubCategoryByIdResetState } from "../redux/GetProductSubCategoryById.redux";
import { getProductByIdResetState } from "../redux/GetProductById.redux";
import { addEditUserResetState } from "../redux/AddEditUser.redux";
import { userLoginResetState } from "../redux/UserLogin.redux";

export function* resetStateAPISaga({
  payload,
}: {
  type: string;
  payload: any;
}) {
  if (payload.state === "places") {
    yield put(getPlaceResetState());
  } else if (payload.state === "product-categories") {
    yield put(getProductCategoryByIdResetState());
  } else if (payload.state === "product-sub-categories") {
    yield put(getProductSubCategoryByIdResetState());
  } else if (payload.state === "products") {
    yield put(getProductByIdResetState());
  } else if (payload.state === "user") {
    yield put(addEditUserResetState());
    yield put(userLoginResetState());
  }
}

export default function* resetStateSaga() {
  yield takeEvery(RESET_STATE, resetStateAPISaga);
}
