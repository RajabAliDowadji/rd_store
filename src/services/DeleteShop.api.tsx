import axios, { AxiosResponse } from "axios";
import { shopByIdEndPoint, DELETE, authHeader, publicHeader } from "./Constant";
import { deleteShopByIdPayload } from "../Modal/DeleteShop.modal";

export const deleteShopAPI = (payload: deleteShopByIdPayload) => {
  const token = localStorage.getItem("token");
  const URL = shopByIdEndPoint(payload.id);
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
