import React from "react";

import { Box, Typography } from "@mui/material";

import NavButton from "./NavButton";

export default function NavMenu() {
  return (
    <Box bgcolor={"#1C1E21"} height="100%" p={2}>
      <Typography variant="h4">DISCORD.TOOLS</Typography>

      <NavButton to="/dashboard/fun-stuff"> Fun Stuff </NavButton>
      <NavButton to="/dashboard/server-analytics"> Server Analytics </NavButton>
      <NavButton to="/dashboard/chat-log"> Chat Log </NavButton>
      <NavButton to="/dashboard/settings"> Settings </NavButton>
    </Box>
  );
}
