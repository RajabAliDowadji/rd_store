import { OrderUser, OrderedItem } from "./OrderPlaced.modal";

export interface GetUserOrderState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  userOrder: userOrderDetails | null;
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: userOrderDetails | null;
  meta: any; //Work IN Future
}

export interface userOrderDetails {
  payment_details: PaymentDetails;
  user: OrderUser;
  _id: string;
  total_qty: Number;
  total_price: Number;
  commission_price: Number;
  user_id: string;
  paid: boolean;
  transition_id: string;
  shop_accepted: boolean;
  shop_id: string;
  shipper_accepted: boolean;
  shipper_id: string;
  deliverd: boolean;
  order_item: OrderedItem[];
  createdAt: string;
  updatedAt: string;
  access_key: string;
}

export interface PaymentDetails {
  payment_id: string;
  amount: Number;
  amount_paid: Number;
  amount_due: Number;
  currency: string;
  payment_status: string;
}
