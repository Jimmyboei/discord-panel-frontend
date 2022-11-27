import React, { useState } from "react";

import { Container, Box, Grid, Button, Typography } from "@mui/material";

import Textfield from "src/component/Textfield";
import Dialog from "src/component/Dialog";

import { sendMessage } from "src/api/message";

export default function SendMessageDialog({
  open = false,
  onClose = () => {},
}) {
  const [message, setMessage] = useState("");
  const [channelId, setChannelId] = useState("");

  const handleSendMessage = () => {
    sendMessage(message, channelId).then((resp) => {
      onClose();
    });
  };

  return (
    <Dialog open={open} onClose={onClose} title="Send a message">
      <Typography variant="p">message</Typography>
      <Textfield
        multiline
        minRows={2}
        value={message}
        onChange={(value) => setMessage(value)}
      />
      <Typography variant="p">Channel id</Typography>
      <Textfield value={channelId} onChange={(value) => setChannelId(value)} />
      <Grid container justifyContent="flex-end" mt={1}>
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </Grid>
    </Dialog>
  );
}
