import { User } from "./AddEditUser.modal";
import { Product } from "./GetProducts.modal";

export interface GetUserItemsState {
  isLoading: boolean;
  isError: boolean;
  isAPICalled: boolean;
  message: string;
  UserItems: CartDetails | null;
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: CartDetails;
  meta: any; //Work IN Future
}

export interface CartDetails {
  _id: string;
  user: User;
  cart_items: CartItem[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  product_qty: number;
  product: Product;
}
