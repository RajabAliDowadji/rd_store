import axios, { AxiosResponse } from "axios";
import {
  addProductRatingEndPoint,
  POST,
  authHeader,
  publicHeader,
} from "./Constant";
import { AddEditProductRating } from "../Modal/AddEditProductRating.modal";

export const addProductRatingAPI = (payload: AddEditProductRating) => {
  const token = localStorage.getItem("token");
  const URL = addProductRatingEndPoint;
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
