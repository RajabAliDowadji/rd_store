import { combineReducers } from "@reduxjs/toolkit";
import getPlacesReducer from "./GetPlaces.redux";
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
import addUserAddressReducer from "./AddUserAddress.redux";
import userReducer from "./UserLogin.redux";
import getUserItemsReducer from "./GetUserCartItems.redux";
import orderPlacedReducer from "./OrderPlaced.redux";
import getUserOrderReducer from "./GetUserOrder.redux";
import addBulkCartItemsReducer from "./AddBulkCartItems.redux";
import addProductRatingReducer from "./AddEditProductRating.redux";
import getUserAddressesReducer from "./GetUserAddresses.redux";
import deleteUserAddressReduer from "./DeleteUserAddress.redux";

const rootReducers = combineReducers({
  //Place Reducer Start
  get_places: getPlacesReducer,
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
  //Product Reducer End

  // ADD Edit Cart Items Reducer Start
  add_edit_cart_items: addEditCartItemsReducer,
  get_user_items: getUserItemsReducer,
  add_bulk_cart_items: addBulkCartItemsReducer,
  // ADD Edit Cart Items Reducer End

  // User Reducer Start
  add_edit_user: addEditUserReducer,
  login_user: userReducer,
  add_user_address: addUserAddressReducer,
  get_user_addresses: getUserAddressesReducer,
  delete_user_address: deleteUserAddressReduer,
  // User Reducer End

  // Order Reducer Start
  order_placed: orderPlacedReducer,
  get_user_order: getUserOrderReducer,
  // Order Reducer End

  //Product Rating Start
  add_product_rating: addProductRatingReducer,
  //Product Rating End
});

export default rootReducers;
