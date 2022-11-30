import React, { useEffect, useState } from "react";
import { Container, Box, Grid, Button, Typography } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";
import DashboardCard from "./component/DashboardCard";

import { getServers } from "src/api/message";

export default function ServerAnalytics() {
  const [servers, setServers] = useState({});

  useEffect(() => {
    getServers().then((resp) => {
      setServers(resp);
    });
  }, []);
  return (
    <DashboardContainer>
      <Grid container m={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <Typography variant="h5">Joined Server</Typography>
            <Typography variant="h3" id="serverNumber"> {servers.joinedServers}</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <Typography variant="h5"> Left Server</Typography>
            <Typography variant="h3"> {servers.leftServers}</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}
