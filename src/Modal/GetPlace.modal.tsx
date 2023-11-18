export interface GetPlaceState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  place: Place[];
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: Place[];
  meta: any; //Work IN Future
}
export interface GetPlacePayload {
  pincode: number;
}
export interface GetPlaceResponse {
  _id?: string;
  pincode: string;
  town: string;
  district: string;
  city: string;
  state: string;
}

export interface AddPlacePayload {
  pincode: number;
}

export interface Place {
  _id: string;
  town: string;
  district: string;
  city: string;
  state: string;
  pincode: number;
  createdAt?: string;
  updatedAt?: string;
}
