import React from "react";
import MessageIcon from "@mui/icons-material/Message";

import { Container, Box, Grid, Divider, Typography } from "@mui/material";

export default function ChatLogItem({
  channelId = "",
  date = "",
  message = "",
}) {
  return (
    <Box>
      <Grid container py={1}>
        <Grid item>
          <Box mt={1} mr={2}>
            <MessageIcon />
          </Box>
        </Grid>
        <Grid item flexGrow={1}>
          <Grid container alignItems="baseline">
            <Grid item>
              <Typography variant="h6">Channel Id: {channelId} </Typography>
            </Grid>

            <Grid item ml={2}>
              <Typography variant="p"> {date} </Typography>
            </Grid>
          </Grid>
          <Box>message: {message}</Box>
        </Grid>
      </Grid>
      <hr />
    </Box>
  );
}
