import { Product } from "./GetProducts.modal";

export interface AddEditCartItemsState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  total_price: number;
  cart_items: CartItem[];
}

export interface SuccessResponseState {
  status: number;
  message: string;
  data: any;
  meta: any; //Work IN Future
}

export interface CartItem {
  product_qty: number;
  product: Product;
}

export interface AddCartItem {
  product: Product;
}
