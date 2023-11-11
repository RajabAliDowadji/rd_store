import axios, { AxiosResponse } from "axios";
import { addUserEndPoint, POST, publicHeader } from "./Constant";
import { AddUserPayload } from "../Modal/AddEditUser.modal";

export const addUserAPI = (payload: AddUserPayload) => {
  const URL = addUserEndPoint;
  let header = publicHeader;

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
