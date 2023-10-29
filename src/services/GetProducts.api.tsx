import axios, { AxiosResponse } from "axios";
import { getProductsEndPoint, GET, authHeader, publicHeader } from "./Constant";
import { GetProductQueryPayloads } from "../Modal/GetProducts.modal";

export const getProductsAPI = (payload: GetProductQueryPayloads) => {
  const token = localStorage.getItem("token");
  const URL = getProductsEndPoint(
    payload.product_category,
    payload.product_sub_category
  );
  let header;
  if (token) {
    header = authHeader(token);
  } else {
    header = publicHeader;
  }

  return axios({
    method: GET,
    url: URL,
    headers: header,
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
