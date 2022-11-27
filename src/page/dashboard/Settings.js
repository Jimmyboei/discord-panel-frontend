import React from "react";
import { Container, Box, Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardContainer from "./component/DashboardContainer";
import Textfield from "src/component/Textfield";

import { setCookie, getCookie } from "src/utlis/cookie";

export default function Settings() {
  const navigate = useNavigate();
  const handleLogout = () => {
    setCookie("token", null);
    navigate("/login");
  };

  return (
    <DashboardContainer>
      <Box width={400} ml={2}>
        <Typography> Bot id </Typography>
        <Textfield value="1111" disabled />

        <Typography> server id </Typography>
        <Textfield value="1111" disabled />

        <Box mt={2}>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Box>
    </DashboardContainer>
  );
}
