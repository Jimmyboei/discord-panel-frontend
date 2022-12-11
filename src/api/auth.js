import { createInstance } from "./instance";
import axios from "axios";

const baseURL = "http://localhost:3000/api/";

export const getCurrentUser = async (token) => {
  return axios({
    baseURL,
    url: "/me",
    method: "get",
    headers: { Authorization: `Bot ${token}` },
  }).then((resp) => {
    if (resp.data.message) {
      throw new Error(`Invalid login token`);
    }

    return token;
  });
};
