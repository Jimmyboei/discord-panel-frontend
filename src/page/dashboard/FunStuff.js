import React, { useState } from "react";
import { Container, Box, Grid, Button, Card, Typography } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";

import DashboardCard from "./component/DashboardCard";
import SendMessageDialog from "./component/SendMessageDialog";
import CreatePollDialog from "./component/CreatePollDialog";

export default function FunStuff() {
  const [isSendMessage, setIsSendMessage] = useState(false);
  const [isCreatePoll, setIsCreatePoll] = useState(false);

  return (
    <DashboardContainer>
      <Grid container m={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <Typography variant="h5">Send Message</Typography>
            <Typography>Send Message</Typography>
            <Button variant="contained" onClick={() => setIsSendMessage(true)}>
              Send
            </Button>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <Typography variant="h5">Create a poll</Typography>
            <Typography>Send Message</Typography>
            <Button variant="contained" onClick={() => setIsCreatePoll(true)}>
              Send
            </Button>
          </DashboardCard>
        </Grid>
      </Grid>

      <SendMessageDialog
        open={isSendMessage}
        onClose={() => setIsSendMessage(false)}
      />
      <CreatePollDialog
        open={isCreatePoll}
        onClose={() => setIsCreatePoll(false)}
      />
    </DashboardContainer>
  );
}
