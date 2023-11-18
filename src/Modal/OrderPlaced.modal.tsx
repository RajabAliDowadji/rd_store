import { BucketFile } from "./GetProductCategories.modal";

export interface OrderPlacedState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  orderDetails: OrderDetails | null;
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: OrderDetails;
  meta: any; //Work IN Future
}

export interface OrderDetails {
  total_qty: number;
  total_price: number;
  commission_price: number;
  user_id: string;
  paid: boolean;
  transition_id: string | null;
  shop_accepted: boolean;
  shop_id: string | null;
  shipper_accepted: boolean;
  shipper_id: string | null;
  deliverd: boolean;
  user: OrderUser;
  order_item: OrderedItem[];
}

export interface OrderUser {
  name: string;
  email: string | null;
  phone_number: string;
}

export interface OrderedItem {
  product: ProductDetails;
  _id: string;
}

export interface ProductDetails {
  product_id: string;
  product_qty: number;
  product_title: string;
  product_brand: string;
  product_size: string;
  product_price: number;
  product_description: string;
  product_images: BucketFile[];
}
