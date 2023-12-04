import { takeEvery, put } from "redux-saga/effects";
import { ADD_PRODUCT_RATING } from "./Constant";
import {
  AddEditProductRating,
  SuccessResponseState,
} from "../../Modal/AddEditProductRating.modal";
import {
  addProductRatingFailure,
  addProductRatingStart,
  addProductRatingSuccess,
  internalServerFailure,
} from "../redux/AddEditProductRating.redux";
import { addProductRatingAPI } from "../../services/AddEditProductRating.api";

export function* addProductRatingSaga({
  payload,
}: {
  type: string;
  payload: AddEditProductRating;
}) {
  yield put(addProductRatingStart());
  let result: SuccessResponseState;
  try {
    result = yield addProductRatingAPI(payload);
    if (result.status === 200) {
      yield put(addProductRatingSuccess(result));
    } else {
      yield put(addProductRatingFailure(result));
    }
  } catch (e) {
    yield put(internalServerFailure());
  }
}

export function* addProductRating() {
  yield takeEvery(ADD_PRODUCT_RATING, addProductRatingSaga);
}
