import axios, { AxiosResponse } from "axios";
import {
  deleteUserAddressEndPoint,
  DELETE,
  authHeader,
  publicHeader,
} from "./Constant";
import { DeleteUserAddressPayload } from "../Modal/DeleteUserAddress.modal";

export const deleteUserAddressAPI = (payload: DeleteUserAddressPayload) => {
  const token = localStorage.getItem("token");
  const URL = deleteUserAddressEndPoint(payload.id);
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
    data: JSON.stringify(payload),
  })
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};
