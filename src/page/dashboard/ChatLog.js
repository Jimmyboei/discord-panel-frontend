import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";

import ChatLogItem from "./component/ChatLogItem";

import { getChannels, getUserGuilds, getChatLogs } from "src/api/message";

import { getCookie } from "src/utlis/cookie";
import _ from "lodash";

export default function ChatLog() {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // const loadMessages = async () => {

    //   console.warn("allChannels", allChannels);
    // };
    // loadMessages();

    getUserGuilds().then((guilds) => {
      const getAllChannels = guilds.map(async (guild) => {
        return getChannels(guild.id);
      });
      Promise.all(getAllChannels).then((resp) => {
        setChannels(_.flatten(resp));
      });
    });
  }, []);

  useEffect(() => {
    if (channels.length === 0) return;

    const getAllMessages = channels.map(async (channel) => {
      return getChatLogs(channel.id);
    });
    Promise.all(getAllMessages).then((resp) => {
      setMessages(_.flatten(resp));
    });
  }, [channels]);

  return (
    <DashboardContainer>
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
        }}
      >
        <Grid container px={2} justifyContent="flex-end" flexDirection="column">
          {messages.map((item, key) => (
            <ChatLogItem
              key={key}
              channelId={item.channel_id}
              date={item.timestamp}
              message={item.content}
            />
          ))}
        </Grid>
      </Box>
    </DashboardContainer>
  );
}
