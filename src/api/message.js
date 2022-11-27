import axios from "axios";

export const sendMessage = async (message = "", channelId = "") => {
  // call API
  console.warn(message, channelId);
  return {
    message: "",
  };
};

export const getServers = async () => {
  // call API

  return {
    joinedServers: 123,
    leftServers: 2,
  };
};
