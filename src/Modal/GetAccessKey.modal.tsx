export interface GetAccessKeyState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  access_key: AccessKey | null;
}

export interface SuccessResponseState {
  status: number;
  message: string;
  data: AccessKey;
  meta: any; //Work IN Future
}

export interface AccessKey {
  key: string;
}
