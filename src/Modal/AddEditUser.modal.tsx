export interface AddEditUserState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
  user: User | null;
}

export interface SuccessResponseState {
  status: number;
  message: string;
  data: User;
  meta: any; //Work IN Future
}

export interface User {
  _id: string;
  email: string;
  phone_number: string;
  user_name: string;
  token: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AddUserPayload {
  email: string;
  phone_number: string;
  user_name: string;
}

export interface EditUserPayload {
  id: string;
  phone_number: string;
}
