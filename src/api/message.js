// import axios from "axios";
import _ from "lodash";

import { createInstance } from "./instance";

import { setLocalStorage, getLocalStorage } from "src/utlis/localStorage";

export const getUserGuilds = async () => {
  return createInstance()
    .get("/userGuilds")
    .then((resp) => {
      if (resp.data.error) return [];

      return resp.data;
    });
};

export const sendMessage = async ({ message, channelId }) => {
  return createInstance()
    .post(`channelMessages/${channelId}`, {
      content: message,
    })
    .then((resp) => {
      return resp.data;
    });
};

export const getServers = async () => {
  // mockdata for server info

  return {
    joinedServers: 123,
    leftServers: 2,
  };
};

export const getChannels = async (guildId) => {
  return createInstance()
    .get(`guildChannels/${guildId}`)
    .then((resp) => {
      if (resp.data.error) return [];
      return resp.data;
    });
};

export const getChatLogs = async (channelId) => {
  // return getLocalStorage("messages") || [];
  return createInstance()
    .get(`channelMessages/${channelId}`)
    .then((resp) => {
      if (resp.data.error) return [];
      
      return resp.data;
    });
};

export const getServerInfo = async () => {
  return {
    botId: "mockBotId",
    serverId: "mockServerId",
  };
};
