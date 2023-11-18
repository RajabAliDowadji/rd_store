import axios, { AxiosResponse } from "axios";
import {
  addCartItemsEndPoint,
  POST,
  authHeader,
  publicHeader,
  removeCartItemEndPoint,
  removeItemEndPoint,
  DELETE,
} from "./Constant";
import { AddCartItem } from "../Modal/AddEditCartItems.modal";

export const addCartItemsAPI = (payload: AddCartItem) => {
  const token = localStorage.getItem("token");
  const URL = addCartItemsEndPoint;
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
    data: JSON.stringify({ product: payload.product._id }),
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const removeCartItemInAPI = (payload: AddCartItem) => {
  const token = localStorage.getItem("token");
  const URL = removeCartItemEndPoint;
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
    data: JSON.stringify({ product: payload.product._id }),
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export const removeItemInAPI = (payload: AddCartItem) => {
  const token = localStorage.getItem("token");
  const URL = removeItemEndPoint(payload.product._id);
  let header;
  if (token) {
    header = authHeader(token);
  } else {
    header = publicHeader;
  }
  return axios({
    method: DELETE,
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
