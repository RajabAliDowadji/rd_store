import axios, { AxiosResponse } from "axios";
import {
  orderPlacedEndPoint,
  POST,
  authHeader,
  publicHeader,
} from "./Constant";

export const orderPlacedAPI = () => {
  const token = localStorage.getItem("token");
  const URL = orderPlacedEndPoint;
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
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
