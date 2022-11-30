// import axios from "axios";
import _ from 'lodash';


import { setLocalStorage, getLocalStorage } from "src/utlis/localStorage";

export const sendMessage = async (body) => {


  const resp = {
    id: _.uniqueId('message_'),
    date: Date(),
    ...body,
  };


  const messages = getLocalStorage('messages') || [];

  setLocalStorage('messages', [...messages, resp]);


  return resp;
};

export const getServers = async () => {
  // mockdata for server info


  return {
    joinedServers: 123,
    leftServers: 2,
  };
};




export const getChatLogs = async () => {
  return getLocalStorage('messages') || [];
};




export const getServerInfo = async () => {
  return {
    botId: 'mockBotId',
    serverId: 'mockServerId',
  };
};