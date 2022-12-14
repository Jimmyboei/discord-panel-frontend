import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <Container sx={{ background: "#181818" }}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6"> DISCORD.TOOLS</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="white">
            <a
              href="https://github.com/Jimmyboei/discord-panel-frontend"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid container minHeight="80vh">
        <Grid item margin="auto">
          <Typography variant="h2" textAlign="center">
            DISCORD.TOOLS
          </Typography>

          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
}
