import axios, { AxiosResponse } from "axios";
import {
  addBulkCartItemsEndPoint,
  POST,
  authHeader,
  publicHeader,
} from "./Constant";
import { AddBulkCartItem } from "../Modal/AddBulkCartItems.modal";

export const addBulkCartItemsAPI = (payload: AddBulkCartItem[]) => {
  const token = localStorage.getItem("token");
  const URL = addBulkCartItemsEndPoint;
  let header;
  if (token) {
    header = authHeader(token);
  } else {
    header = publicHeader;
  }
  return axios({
    method: POST,
    url: URL,
    headers: header,
    data: JSON.stringify(payload),
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
