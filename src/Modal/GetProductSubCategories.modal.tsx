import { BucketFile, ProductCategory } from "./GetProductCategories.modal";

export interface GetProductSubCategoriesState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  productSubCategories: ProductSubCategory[];
}
export interface SuccessResponseState {
  status: number;
  message: string;
  data: ProductSubCategory[];
  meta: any; //Work IN Future
}

export interface ProductSubCategory {
  _id: string;
  sub_category_name: string;
  sub_category_image: BucketFile;
  product_category: ProductCategory;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetProductSubCategoriesColumns {
  _id: string;
  sub_category_name: string;
  sub_category_image: BucketFile;
  product_category: ProductCategory;
}

export interface ProductSubCategoriesPayload {
  id: string;
}
