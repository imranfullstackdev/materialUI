import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container, Button, } from "@mui/material";
import adidas from "./Images/adidas.mp4";

const Financial = () => {
  return (
    <>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
         <center>
         <Typography variant="h3" justifyContent={"center"}sx={{fontSize:'45px'}}>
            Mobile App
          </Typography>
          <Typography variant="h6" justifyContent={"center"} >
          Finance Mobile App Development Solutions
Finance applications are not like other apps, there is a considerable amount of serious concerns about usability, security and the companies’ revenues. Using the best and precise technology for a Fintech app is crucial.

Being one of the best Fintech App Development Company in the market, We understand every concern regarding finance app development and offer best-in-class solutions to overcome any obstacle. We put a great deal of hard work into helping our clients.
          </Typography>{" "}
         
          <Button sx={{ background: "black", color: "white" ,marginTop:'15px'}}  size="large">
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
    src="https://www.appincubator.io/assets/images/financial-software/finance-mobile-app-development-solutions.jpg"
    srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
    alt=""
  />
        </Grid>
      </Grid>
    </>
  );
};

export default Financial;
