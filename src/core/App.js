import { BrowserRouter } from "react-router-dom";
import { Container, Box, Grid, Button, Typography } from "@mui/material";

import Router from "./Router";
import "./app.css";

export default function App() {
  return (
    <Box
      className="App"
      sx={{
        background: "black",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Box>
  );
}
