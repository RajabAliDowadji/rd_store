import { Product } from "./GetProducts.modal";

export interface AddBulkCartItemsState {
  isLoading: boolean;
  isError: boolean;
  message: string;
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

export interface AddBulkCartItem {
  product_qty: number;
  product: string;
}
