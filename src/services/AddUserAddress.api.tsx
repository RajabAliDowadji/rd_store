import axios, { AxiosResponse } from "axios";
import {
  addUserAddressAPIEndPoint,
  authHeader,
  POST,
  publicHeader,
} from "./Constant";
import { AddUserAddressPayload } from "../Modal/AddUserAddress.modal";

export const addUserAddressAPI = (payload: AddUserAddressPayload) => {
  const URL = addUserAddressAPIEndPoint;
  const token = localStorage.getItem("token");
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
