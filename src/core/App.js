import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

import Router from "./Router";
import "./app.css";

export default function App() {
  return (
    <Box
      className="App"
      sx={{
        background: "#181818",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Box>
  );
}
