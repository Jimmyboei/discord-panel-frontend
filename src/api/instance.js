import axios from "axios";
import _ from "lodash";

import { getCookie } from "src/utlis/cookie";

const baseURL = "http://localhost:3000/api/";

export const createInstance = () => {
  const token = getCookie("token");
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: { Authorization: `Bot ${token}` },
  });

  return instance;
};
