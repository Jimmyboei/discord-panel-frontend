import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "./component/DashboardContainer";
import Textfield from "src/component/Textfield";

import { setCookie } from "src/utlis/cookie";

import { getCurrentUser } from "src/api/auth";

export default function Settings() {
  const navigate = useNavigate();

  const [serverInfo, setServerInfo] = useState({});
  const handleLogout = () => {
    setCookie("token", null);
    navigate("/login");
  };

  useEffect(() => {
    getCurrentUser().then((resp) => {
      setServerInfo(resp);
    });
  }, []);

  return (
    <DashboardContainer>
      <Box width={400} ml={2}>
        <Typography> Bot id </Typography>
        <Textfield value={serverInfo.id} disabled />

        <Typography> Botname </Typography>
        <Textfield value={serverInfo.username} disabled />
        <Box mt={2}>
          <Button
            variant="outlined"
            href={`https://discord.com/oauth2/authorize?client_id=${serverInfo.id}&scope=bot&permissions=1`}
            target="_blank"
            rel="noreferrer"
          >
            Add bot to your server
          </Button>
        </Box>
        <Box mt={2}>
          <Button variant="contained" onClick={handleLogout} id="logout">
            Logout
          </Button>
        </Box>
      </Box>
    </DashboardContainer>
  );
}
