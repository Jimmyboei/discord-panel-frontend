import cookie from "cookiejs";

export const setCookie = (name, value) => {
  cookie(name, value);
};

export const getCookie = (name) => {
  return cookie.get(name);
};
