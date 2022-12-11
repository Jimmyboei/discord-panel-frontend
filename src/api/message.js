// import axios from "axios";
import _ from "lodash";

import { createInstance } from "./instance";

import { setLocalStorage, getLocalStorage } from "src/utlis/localStorage";

export const sendMessage = async ({ message, channelId }) => {
  return createInstance()
    .post(`channelMessages/${channelId}`, {
      content: message,
    })
    .then((resp) => {
      return resp;
    });
};

export const getServers = async () => {
  // mockdata for server info

  return {
    joinedServers: 123,
    leftServers: 2,
  };
};

export const getChatLogs = async () => {
  return getLocalStorage("messages") || [];
};

export const getServerInfo = async () => {
  return {
    botId: "mockBotId",
    serverId: "mockServerId",
  };
};
