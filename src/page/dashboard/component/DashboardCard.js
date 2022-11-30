import React from "react";

import { Card, Box, Grid, Button, Typography } from "@mui/material";

import NavButton from "./NavButton";

export default function DashboardCard({ children }) {
  return (
    <Card
      sx={{
        p: 2,
        color: "white",
        background: "#1C1E21",
      }}
    >
      {children}
    </Card>
  );
}
