import { UserAddressData } from "./AddUserAddress.modal";

export interface UserAddressesState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  userAddresses: UserAddressData | null;
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: UserAddressData;
  meta: any; //Work IN Future
}
