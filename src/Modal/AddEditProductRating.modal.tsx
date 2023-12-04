export interface AddEditProductRatingState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  isSuccess: boolean;
}

export interface SuccessResponseState {
  status: number;
  message: string;
  data: any;
  meta: any; //Work IN Future
}

export interface AddEditProductRating {
  rating: number;
  product: string;
}
