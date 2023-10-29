import { createSlice } from "@reduxjs/toolkit";
import {
  AddEditCartItemsState,
  CartItem,
} from "../../Modal/AddEditCartItems.modal";

const initialState = {
  isLoading: false,
  isError: false,
  message: "",
  total_price: 0,
  cart_items: [],
} as AddEditCartItemsState;

const addEditCartItemSlice = createSlice({
  name: "add_edit_cart_items",
  initialState,
  reducers: {
    addProductInCart(state, action) {
      const itemIndex = state.cart_items.findIndex(
        (cartItem: CartItem) =>
          cartItem.product._id === action.payload.product._id
      );
      if (itemIndex !== -1) {
        let cartItems = state.cart_items;
        state.total_price =
          state.total_price + action.payload.product.product_price;
        cartItems[itemIndex].product_qty = cartItems[itemIndex].product_qty + 1;
        state.cart_items = cartItems;
      } else {
        state.total_price =
          state.total_price + action.payload.product.product_price;
        state.cart_items = [
          ...state.cart_items,
          { product_qty: 1, product: action.payload.product },
        ];
      }
    },
    removeSingleProductInCart(state, action) {
      const find_Product = state.cart_items.find(
        (cartItem: CartItem) =>
          cartItem.product._id === action.payload.product._id
      );
      if (find_Product && find_Product.product_qty === 1) {
        state.total_price =
          state.total_price - action.payload.product.product_price;
        state.cart_items = state.cart_items.filter(
          (cartItem: CartItem) =>
            cartItem.product._id !== action.payload.product._id
        );
      } else {
        state.cart_items = state.cart_items.map((cartItem: CartItem) => {
          if (cartItem.product._id === action.payload.product._id) {
            state.total_price =
              state.total_price - action.payload.product.product_price;
            return {
              product_qty: cartItem.product_qty - 1,
              product: cartItem.product,
            };
          } else {
            return cartItem;
          }
        });
      }
    },
    removeProductInCart(state, action) {
      const find_Product = state.cart_items.find(
        (cartItem: CartItem) =>
          cartItem.product._id === action.payload.product._id
      );
      if (find_Product) {
        state.cart_items = state.cart_items.filter(
          (cartItem: CartItem) =>
            cartItem.product._id !== action.payload.product._id
        );
      }
    },
  },
});

export const {
  addProductInCart,
  removeProductInCart,
  removeSingleProductInCart,
} = addEditCartItemSlice.actions;

export default addEditCartItemSlice.reducer;
