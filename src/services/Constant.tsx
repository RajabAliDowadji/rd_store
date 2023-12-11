export const BASE_URL = "http://localhost:5000/";

export const POST = "post";
export const GET = "get";
export const PUT = "put";
export const DELETE = "delete";

export const publicHeader = { "Content-Type": "application/json" };

export const authHeader = (token: string) => {
  return {
    "Content-Type": "application/json",
    token: token,
  };
};
export const fileHeader = (token: string) => {
  return {
    "Content-Type": "multipart/form-data",
    token: token,
  };
};
export const Login_END_POINT = "user/login";

// Place End Point Start
export const Get_Places_END_POINT = "places";
export const Get_Place_END_POINT = "rd_admin/place";
export const Place_By_Id_END_POINT = "rd_admin/place/";
export const getPlaceEndPoint = BASE_URL + Get_Place_END_POINT;
export const getPlacesEndPoint = BASE_URL + Get_Places_END_POINT;
export const placeByIdEndPoint = (id: string) => {
  return BASE_URL + Place_By_Id_END_POINT + id;
};
// Place End Point End

// Product Category End Point Start
export const Product_END_POINT = "product/";
export const Get_Product_Categories_END_POINT = "categories";
export const Get_Product_Category_By_Id_END_POINT = "category/";
export const getProductCategoriesEndPoint =
  BASE_URL + Product_END_POINT + Get_Product_Categories_END_POINT;
export const productCategoryByIdEndPoint = (id: string) => {
  return (
    BASE_URL + Product_END_POINT + Get_Product_Category_By_Id_END_POINT + id
  );
};
// Product Category End Point End

// Product Sub-Category End Point Start
export const Get_Product_Sub_Categories_END_POINT = "sub_categories";
export const Add_Product_Sub_Category_END_POINT = "sub_category/create";
export const Get_Product_Sub_Category_By_Id_END_POINT = "sub_category/";
export const getProductSubCategoriesEndPoint = (id?: string) => {
  if (id) {
    return (
      BASE_URL +
      Product_END_POINT +
      Get_Product_Sub_Categories_END_POINT +
      `?product_category=${id}`
    );
  }
  return BASE_URL + Product_END_POINT + Get_Product_Sub_Categories_END_POINT;
};
export const productSubCategoryByIdEndPoint = (id: string) => {
  return (
    BASE_URL + Product_END_POINT + Get_Product_Sub_Category_By_Id_END_POINT + id
  );
};
export const addProductSubCategoryEndPoint =
  BASE_URL + Product_END_POINT + Add_Product_Sub_Category_END_POINT;
// Product Sub-Category End Point Start

// Product Brand End Point Start
export const Get_Product_Brands_END_POINT = "brands";
export const Add_Product_Brand_END_POINT = "brand/create";
export const Get_Product_Brand_By_Id_END_POINT = "brand/";
export const getProductBrandsEndPoint =
  BASE_URL + Product_END_POINT + Get_Product_Brands_END_POINT;
export const productBrandByIdEndPoint = (id: string) => {
  return BASE_URL + Product_END_POINT + Get_Product_Brand_By_Id_END_POINT + id;
};
export const addProductBrandEndPoint =
  BASE_URL + Product_END_POINT + Add_Product_Brand_END_POINT;
// Product Brand End Point End

// Product End Point Start
export const Get_Product_END_POINT = "product/";
export const Add_Product_END_POINT = "create";
export const getProductsEndPoint = (
  product_category: string,
  product_sub_category: string
) => {
  if (
    product_category &&
    product_category !== "" &&
    product_sub_category &&
    product_sub_category !== ""
  ) {
    return (
      BASE_URL +
      Get_Product_END_POINT +
      `?product_category=${product_category}&product_sub_category=${product_sub_category}`
    );
  } else if (product_category && product_category !== "") {
    return (
      BASE_URL + Get_Product_END_POINT + `?product_category=${product_category}`
    );
  } else if (product_sub_category && product_sub_category !== "") {
    return (
      BASE_URL +
      Get_Product_END_POINT +
      `?product_sub_category=${product_sub_category}`
    );
  } else {
    return BASE_URL + Get_Product_END_POINT;
  }
};
export const productByIdEndPoint = (id: string) => {
  return BASE_URL + Get_Product_END_POINT + id;
};
export const addProductEndPoint =
  BASE_URL + Get_Product_END_POINT + Add_Product_END_POINT;
// Product End Point End

// User End Point Start

export const Add_User_END_POINT = "user/create";
export const addUserEndPoint = BASE_URL + Add_User_END_POINT;

// User End Point End

// Cart End Point Start
export const Add_Cart_Item_END_POINT = "cart/add_item";
export const Remove_Cart_Item_END_POINT = "cart/remove_item";
export const Remove_Item_END_POINT = "cart/item/";
export const Get_User_Items_END_POINT = "cart/items";
export const Add_Cart_Bulk_Items_END_POINT = "cart/bulk/add_item";
export const addCartItemsEndPoint = BASE_URL + Add_Cart_Item_END_POINT;
export const removeCartItemEndPoint = BASE_URL + Remove_Cart_Item_END_POINT;
export const removeItemEndPoint = (id: string) => {
  return BASE_URL + Remove_Item_END_POINT + id;
};
export const getUserItemsEndPoint = BASE_URL + Get_User_Items_END_POINT;
export const addBulkCartItemsEndPoint =
  BASE_URL + Add_Cart_Bulk_Items_END_POINT;
// Cart End Point End

// Order End Point Start
export const Order_Placed_END_POINT = "order/placed";
export const Add_User_Address_END_POINT = "address/create";
export const Get_User_Address_END_POINT = "address";
export const User_Order_END_POINT = "user/order";
export const orderPlacedEndPoint = BASE_URL + Order_Placed_END_POINT;
export const getUserOrderEndPoint = BASE_URL + User_Order_END_POINT;
export const addUserAddressAPIEndPoint = BASE_URL + Add_User_Address_END_POINT;
export const getUserAddressesEndPoint = BASE_URL + Get_User_Address_END_POINT;
export const deleteUserAddressEndPoint = (id: string) => {
  return BASE_URL + Get_User_Address_END_POINT + `/${id}`;
};
// Order End Point End

export const userLoginEndPoint = BASE_URL + Login_END_POINT;

// Product Rating End Point Start
export const Add_Product_Rating_END_POINT = "product/rating";
export const addProductRatingEndPoint = BASE_URL + Add_Product_Rating_END_POINT;
// Product Rating End Point End
