import React from "react";

import { Container, Box, Grid, Button, Typography } from "@mui/material";

import Dialog from "src/component/Dialog";
import Textfield from "src/component/Textfield";

export default function CreatePollDialog({ open = false, onClose = () => {} }) {
  return (
    <Dialog open={open} onClose={onClose} title="Create a poll">
      <Typography variant="h4"> What is your favorite color? </Typography>
    </Dialog>
  );
}
