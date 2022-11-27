import React from "react";
import { Container, Box, Grid, Button, Typography } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";

import ChatLogItem from "./component/ChatLogItem";

const mockLogs = [
  {
    channelId: 111,
    date: Date(),
    message: "1111111111111111111111111111111111111111111111111111111",
  },
  {
    channelId: 111,
    date: Date(),
    message: "2",
  },
  {
    channelId: 111,
    date: Date(),
    message: "3",
  },
  {
    channelId: 111,
    date: Date(),
    message: "4",
  },
  {
    channelId: 111,
    date: Date(),
    message: "5",
  },
  {
    channelId: 111,
    date: Date(),
    message: "6",
  },
  {
    channelId: 111,
    date: Date(),
    message: "4",
  },
  {
    channelId: 111,
    date: Date(),
    message: "5",
  },
  {
    channelId: 111,
    date: Date(),
    message: "6",
  },
  {
    channelId: 111,
    date: Date(),
    message: "4",
  },
  {
    channelId: 111,
    date: Date(),
    message: "5",
  },
  {
    channelId: 111,
    date: Date(),
    message: "6",
  },
  {
    channelId: 111,
    date: Date(),
    message: "4",
  },
  {
    channelId: 111,
    date: Date(),
    message: "5",
  },
  {
    channelId: 111,
    date: Date(),
    message: "6",
  },
  {
    channelId: 111,
    date: Date(),
    message: "6",
  },
  {
    channelId: 111,
    date: Date(),
    message: "4",
  },
  {
    channelId: 111,
    date: Date(),
    message: "5",
  },
  {
    channelId: 111,
    date: Date(),
    message: "6",
  },
];

export default function ChatLog() {
  return (
    <DashboardContainer>
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
        }}
      >
        <Grid container px={2} justifyContent="flex-end" flexDirection="column">
          {mockLogs.map((item) => (
            <ChatLogItem
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
