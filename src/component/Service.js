import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container, Button, ListItem } from "@mui/material";
import adidas from "./Images/adidas.mp4";

const Service = () => {
  return (
    <>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <center>
            <Typography
              variant="h3"
              justifyContent={"center"}
              sx={{ fontSize: "45px" }}
            >
              Services We Offer
            </Typography>
            {/* <Typography variant="h6" justifyContent={"center"} > */}
            <ListItem> Multipurpose finance mobility solution</ListItem>
            <ListItem> Stock trading digital solutions</ListItem>
            <ListItem> Digitization for the banking sector</ListItem>
            <ListItem> Portals to handle employees</ListItem>
            <ListItem> Landscape analysis</ListItem>
            <ListItem> Infrastructure-readiness assessment</ListItem>
            <ListItem> Product evaluation and vendor analysis</ListItem>
            <ListItem> Mobile Application Development</ListItem>

            {/* </Typography>{" "} */}

            <Button
              sx={{ background: "black", color: "white", marginTop: "15px" }}
              size="large"
            >
              Contact Us
            </Button>
          </center>
          <Typography variant="h3">
            {/* We Are One Of The Leading Software Comapany In Hyderabad */}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          justifyContent="center"
          order={{ xs: 1, sm: 2 }}
        >
          <img 
          sx={{maxWidth:'100vw'}}
            src="https://www.appincubator.io/assets/images/financial-software/services-we-offer.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Service;
