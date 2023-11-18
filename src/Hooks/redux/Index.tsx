import { combineReducers } from "@reduxjs/toolkit";
import getPlaceReducer from "./GetPlace.redux";
import getPlaceByIdReducer from "./GetPlaceById.redux";
import getProductCategoriesReducer from "./GetProductCategories.redux";
import getProductCategoryByIdReducer from "./GetProductCategoryById.redux";
import getProductSubCategoriesReducer from "./GetProductSubCategories.redux";
import getProductSubCategoryByIdReducer from "./GetProductSubCategoryById.redux";
import getProductsReducer from "./GetProducts.redux";
import getProductByIdReducer from "./GetProductById.redux";
import addEditCartItemsReducer from "./AddEditCartItems.redux";
import addEditUserReducer from "./AddEditUser.redux";
import userReducer from "./UserLogin.redux";
import getUserItemsReducer from "./GetUserCartItems.redux";
import orderPlacedReducer from "./OrderPlaced.redux";
import getUserOrderReducer from "./GetUserOrder.redux";
import addBulkCartItemsReducer from "./AddBulkCartItems.redux";

const rootReducers = combineReducers({
  //Place Reducer Start
  get_place: getPlaceReducer,
  get_place_by_id: getPlaceByIdReducer,
  //Place Reducer End

  //Product Category Reducer Start
  get_product_categories: getProductCategoriesReducer,
  get_product_category_by_id: getProductCategoryByIdReducer,
  //Product Category Reducer End

  //Product Sub-Category Reducer Start
  get_product_sub_categories: getProductSubCategoriesReducer,
  get_product_sub_category_by_id: getProductSubCategoryByIdReducer,
  //Product Sub-Category Reducer End

  //Product Reducer Start
  get_products: getProductsReducer,
  get_product_by_id: getProductByIdReducer,
  //Product Reducer Start

  // ADD Edit Cart Items Reducer Start
  add_edit_cart_items: addEditCartItemsReducer,
  get_user_items: getUserItemsReducer,
  add_bulk_cart_items: addBulkCartItemsReducer,
  // ADD Edit Cart Items Reducer End

  // User Reducer Start
  add_edit_user: addEditUserReducer,
  login_user: userReducer,
  // User Reducer End

  // Order Reducer Start
  order_placed: orderPlacedReducer,
  get_user_order: getUserOrderReducer,
  // Order Reducer End
});

export default rootReducers;
