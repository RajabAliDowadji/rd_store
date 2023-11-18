import { all, fork } from "redux-saga/effects";
import getPlaceSaga from "./GetPlace.saga";
import getPlaceByIdSaga from "./GetPlaceById.saga";
import getProductCategoriesSaga from "./GetProductCategories.saga";
import getProductCategoryByIdSaga from "./GetProductCategoryById.saga";
import getProductSubCategoriesSaga from "./GetProductSubCategories.saga";
import getProductSubCategoryByIdSaga from "./GetProductSubCategoryById.saga";
import getProductsSaga from "./GetProducts.saga";
import getProductByIdSaga from "./GetProductById.saga";

import resetStateSaga from "./ResetState.saga";
import {
  addCartItem,
  removeProductInCartItem,
  removeSingleCartItem,
} from "./AddEditCartItems.saga";
import userLoginSaga from "./UserLogin.saga";
import { addUserSaga } from "./AddEditUser.saga";
import getUserCartItemsSaga from "./GetUserCartItems.saga";
import OrderPlacedSaga from "./OrderPlaced.saga";
import getUserOrderSaga from "./GetUserOrder.saga";
import { addBulkCartItems } from "./AddBulkCartItems.saga";

export default function* rootSaga() {
  yield all([
    fork(resetStateSaga),

    //Place Saga Start
    fork(getPlaceSaga),
    fork(getPlaceByIdSaga),
    //Place Saga End

    //Product Category Saga Start
    fork(getProductCategoriesSaga),
    fork(getProductCategoryByIdSaga),
    //Product Category Saga End

    //Product Sub-Category Saga Start
    fork(getProductSubCategoriesSaga),
    fork(getProductSubCategoryByIdSaga),
    //Product Sub-Category Saga End

    //Product Saga Start
    fork(getProductsSaga),
    fork(getProductByIdSaga),
    //Product Saga End

    // Add Cart Item Saga Start
    fork(addCartItem),
    fork(removeSingleCartItem),
    fork(removeProductInCartItem),
    fork(getUserCartItemsSaga),
    fork(addBulkCartItems),
    // Add Cart Item Saga End

    // Order Saga Start
    fork(OrderPlacedSaga),
    fork(getUserOrderSaga),
    // Order Saga End

    //User saga Start
    fork(addUserSaga),
    fork(userLoginSaga),
    //User saga End
  ]);
}
