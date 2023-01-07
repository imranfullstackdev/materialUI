import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
// import {LoginIcon,LogoutIcon} from '@mui/icons-material'
import React from "react";
import {} from "@mui/material/List";
import {} from "@mui/material/ListItem";
import {} from "@mui/material/ListItemText";
import {} from "@mui/icons-material/Comment";
import {} from "@mui/material/IconButton";
import {
  List,
  ListItem,
  ListItemText,
  CommentIcon,
  IconButton,
  Grid
} from "@mui/material";

const Footer = () => {
  return (
    <>
      <center>
        <div>
          <center>
            <Typography variant="h3">Lmv It Solution</Typography>
            
          </center>
        </div>
        <div sx={{ marginTop: "5px" }}>
          <center>
          
          </center>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            sx={{ borderRadius: "15px" }}
          >
            <Grid item lg={4} xs={12} sm={6} >
            <List   >
              <Typography variant="h6" sx={{ width: "33%" }} >
                Social Media 
              </Typography>
              {["Projects", "instagram", "LinkedIn"].map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="comment"></IconButton>
                  }
                >
                  <ListItemText primary={` ${value}`} />
                </ListItem>
              ))}
            </List>
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              sm={6}
              justifyContent="center"
              order={{ xs: 1, sm: 2 }}
            >
              <List>
              <Typography variant="h6" sx={{ width: "33%" }}>
                Social Media
              </Typography>
              {["Projects", "instagram", "LinkedIn"].map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="comment"></IconButton>
                  }
                >
                  <ListItemText primary={` ${value}`} />
                </ListItem>
              ))}
            </List>
            </Grid>
            <Grid
              item
              lg={4}
              xs={12}
              sm={6}
              justifyContent="center"
              order={{ xs: 1, sm: 2 }}
            >
              <List >
              <Typography variant="h6" sx={{ width: "33%" }}>
                Social Media 
              </Typography>
              {["Projects", "instagram", "LinkedIn"].map((value) => (
                <ListItem
                  key={value}
                  disableGutters
                  secondaryAction={
                    <IconButton aria-label="comment"></IconButton>
                  }
                >
                  <ListItemText primary={` ${value}`} />
                </ListItem>
              ))}
            </List>
            </Grid>
          </Grid>
        </div>
        <AppBar
          position="sticky"
          sx={{ background: "whitesmoke", color: "black", marginTop: "15px" }}
        >
       
        </AppBar>
      </center>
    </>
  );
};

export default Footer;
