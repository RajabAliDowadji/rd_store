export interface GetProductCategoriesState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  productCategories: ProductCategory[];
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: ProductCategory[];
  meta: any; //Work IN Future
}

export interface ProductCategory {
  _id: string;
  category_name: string;
  category_image: BucketFile;
  createdAt?: string;
  updatedAt?: string;
}

export interface BucketFile {
  _id: string;
  file_name: string;
  file_size: number;
  file_key: string;
  file_url: string;
  createdAt: string;
  updatedAt: string;
}
export interface ProductType {
  _id: string;
  type_name: string;
  search_name: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface GetProductCategoriesColumns {
  _id: string;
  category_name: string;
  category_image: BucketFile;
}
