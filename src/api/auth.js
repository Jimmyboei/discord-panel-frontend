import axios from "axios";
import { setCookie, getCookie } from "src/utlis/cookie";

const baseURL = "http://localhost:3000/api/";

export const getCurrentUser = async (inputToken) => {
  const token = getCookie("token");

  return axios({
    baseURL,
    url: "/me",
    method: "get",
    headers: { Authorization: `Bot ${inputToken || token}` },
  }).then((resp) => {
    if (resp.data.message) {
      throw new Error(`Invalid login token`);
    }
    if (inputToken) setCookie("token", inputToken);

    return resp.data;
  });
};
