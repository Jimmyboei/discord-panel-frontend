import React from "react";
import { NavLink } from "react-router-dom";

import { Box, Button } from "@mui/material";

export default function NavButton({ to = "", children }) {
  return (
    <Box>
      <NavLink to={to}>
        {({ isActive }) => (
          <Button
            variant={isActive ? "contained" : ""}
            fullWidth
            sx={{
              justifyContent: "left",
              textTransform: "none",
            }}
          >
            {children}
          </Button>
        )}
      </NavLink>
    </Box>
  );
}
