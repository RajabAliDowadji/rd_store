import axios, { AxiosResponse } from "axios";
import {
  getProductSubCategoriesEndPoint,
  GET,
  authHeader,
  publicHeader,
} from "./Constant";
import { ProductSubCategoriesPayload } from "../Modal/GetProductSubCategories.modal";

export const getProductSubCategoriesAPI = (
  payload: ProductSubCategoriesPayload
) => {
  const token = localStorage.getItem("token");
  const URL = getProductSubCategoriesEndPoint(payload.id);
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
