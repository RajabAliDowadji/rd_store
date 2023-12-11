export interface DeleteUserAddressState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  isSuccess: boolean;
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: null;
  meta: any; //Work IN Future
}

export interface DeleteUserAddressPayload {
  id: string;
}
