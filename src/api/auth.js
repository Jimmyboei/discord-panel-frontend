import { createInstance } from "./instance";
import axios from "axios";

const baseURL = "http://localhost:3000/api/";

export const loginWithBotToken = async (token) => {
  return axios({
    baseURL,
    url: "/userGuilds",
    method: "get",
    headers: { Authorization: `Bot ${token}` },
  }).then((resp) => {
    if (resp.data.message) {
      throw new Error(`Invalid login token`);
    }
    return token;
  });
};
