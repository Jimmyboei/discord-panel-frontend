import React, { useState } from "react";
import { Alert, Box, Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Textfield from "src/component/Textfield";

import { loginWithBotToken } from "src/api/auth";

import { setCookie, getCookie } from "src/utlis/cookie";

export default function LoginForm() {
  const [botToken, setBotToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSend = () => {
    loginWithBotToken(botToken).then((resp) => {
      console.warn("loginWithBotToken", resp);
      setErrorMessage('');
      setCookie("token", resp);
      navigate("/dashboard/fun-stuff");
    }).catch(e => {
      setErrorMessage(e.message);
    });
  };

  return (
    <Box width="500px" maxWidth="100vw" mt={6}>
      <Box my={1}>
        {errorMessage &&
          <Alert severity="error">{errorMessage}</Alert>
        }
      </Box>

      <Typography variant="p"> Login with bot token</Typography>
      <Grid container justifyContent="space-between" spacing={1}>
        <Grid item xs={9}>
          <Textfield
            value={botToken}
            onChange={(value) => setBotToken(value)}
          />
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: "100%",
            }}
            onClick={handleSend}
          >
            Send
          </Button>
        </Grid>
      </Grid>
      <Typography variant="p" color="primary">
        <a
          href="https://discordjs.guide/creating-your-bot/#using-config-json"
          target="_blank" rel="noreferrer"
        >
          how to create a bot token?
        </a>
      </Typography>


    </Box>
  );
}
