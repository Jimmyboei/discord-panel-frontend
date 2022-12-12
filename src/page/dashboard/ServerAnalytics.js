import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import DashboardContainer from "./component/DashboardContainer";
import DashboardCard from "./component/DashboardCard";

import { getUserGuilds } from "src/api/message";

export default function ServerAnalytics() {
  const [servers, setServers] = useState({});

  useEffect(() => {
    getUserGuilds().then((resp) => {
      const joinedServers = resp.length;
      // the page always run twice and reset it to zero
      // so a dumbway to fix it for now
      if (joinedServers === 0) return;
      setServers({
        joinedServers,
      });
    });
  }, []);
  return (
    <DashboardContainer>
      <Grid container m={2} spacing={2}>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <Typography variant="h5" id="serverNumber">
              Joined Server
            </Typography>
            <Typography variant="h3"> {servers.joinedServers || 0}</Typography>
          </DashboardCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <DashboardCard>
            <Typography variant="h5"> Left Server</Typography>
            <Typography variant="h3"> {servers.leftServers || 0}</Typography>
          </DashboardCard>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}
