import React from "react";
import { Grid } from "@mui/material";

import NavMenu from "./NavMenu";

export default function DashboardContainer({ children, ...rest }) {
  return (
    <Grid container height="100vh" overflow="hidden">
      <Grid item>
        <NavMenu />
      </Grid>
      <Grid item flexGrow={1}>
        {children}
      </Grid>
    </Grid>
  );
}
