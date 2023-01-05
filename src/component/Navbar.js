import React from "react";
import { Toolbar } from "@mui/material";
import { Typography, AppBar,Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>
            LMV IT SOLUTION
          </Typography>
          <Button variant="inheriant" startIcon={<LoginIcon/>}>Login</Button>
          <Button variant="inheriant" endIcon={<LogoutIcon/>}>Logout</Button>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
