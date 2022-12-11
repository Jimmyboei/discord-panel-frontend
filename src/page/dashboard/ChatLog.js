import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";

import ChatLogItem from "./component/ChatLogItem";

import { getChannels, getUserGuilds, getChatLogs } from "src/api/message";

import { getCookie } from "src/utlis/cookie";
import _ from "lodash";

export default function ChatLog() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const guilds = await getUserGuilds();

      console.warn("guilds", guilds);
      const allChannels = await guilds.map(async (guild) => {
        return await getChannels(guild);
      }, []);

      console.warn("allChannels", allChannels);
    };
    loadMessages();
    // .then((guilds) => {
    //     guilds.map((guild) => {
    //       getChannels(guild).then();
    //     });
    //     getChatLogs().then((resp) => {
    //       setMessages(resp);
    //     });
  }, []);

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
              channelId={item.channelId}
              date={item.date}
              message={item.message}
            />
          ))}
        </Grid>
      </Box>
    </DashboardContainer>
  );
}
