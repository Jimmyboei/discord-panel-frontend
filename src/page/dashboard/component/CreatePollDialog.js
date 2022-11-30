import React from "react";

import { Typography } from "@mui/material";

import Dialog from "src/component/Dialog";

export default function CreatePollDialog({ open = false, onClose = () => {} }) {
  return (
    <Dialog open={open} onClose={onClose} title="Create a poll">
      <Typography variant="h4"> What is your favorite color? </Typography>
    </Dialog>
  );
}
