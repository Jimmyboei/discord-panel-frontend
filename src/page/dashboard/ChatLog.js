import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";

import ChatLogItem from "./component/ChatLogItem";



import {
  getChatLogs
} from 'src/api/message';




export default function ChatLog() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChatLogs().then(resp => {
      setMessages(resp);
    });
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
