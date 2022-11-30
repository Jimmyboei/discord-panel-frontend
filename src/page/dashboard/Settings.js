import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "./component/DashboardContainer";
import Textfield from "src/component/Textfield";

import { setCookie, getCookie } from "src/utlis/cookie";
import { getServerInfo } from 'src/api/message';



export default function Settings() {
  const navigate = useNavigate();

  const [serverInfo, setServerInfo] = useState({});
  const handleLogout = () => {
    setCookie("token", null);
    navigate("/login");
  };


  useEffect(() => {
    getServerInfo().then(resp => {
      setServerInfo(resp);
    });
  }, []);

  return (
    <DashboardContainer>
      <Box width={400} ml={2}>
        <Typography> Bot id </Typography>
        <Textfield value={serverInfo.botId} disabled />

        <Typography> Server id </Typography>
        <Textfield value={serverInfo.serverId} disabled />

        <Box mt={2}>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Box>
    </DashboardContainer>
  );
}
