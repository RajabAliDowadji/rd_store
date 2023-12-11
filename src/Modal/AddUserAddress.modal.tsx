import { Place } from "./GetPlaces.modal";

export interface AddUserAddressState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
  user_address: UserAddressData | null;
}

export interface SuccessResponseState {
  status: number;
  message: string;
  data: UserAddressData;
  meta: any; //Work IN Future
}

export interface UserAddressData {
  _id: string;
  user_id: string;
  user_address: UserAddress[];
}

export interface UserAddress {
  address_line1: string;
  address_line2: string;
  address_type: string;
  place_id: Place;
  _id: string;
}

export interface AddUserAddressPayload {
  address_line1: string;
  address_line2: string;
  address_type: string;
  place_id: string;
}
