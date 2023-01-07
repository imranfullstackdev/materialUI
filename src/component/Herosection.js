import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container, Button } from "@mui/material";
import adidas from "./Images/adidas.mp4";

const Herosection = () => {
  return (
    <>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
         <center>
         <Typography variant="h3" justifyContent={"center"}sx={{fontSize:'45px'}}>
            Mobile App
          </Typography>
          <Typography variant="h3" justifyContent={"center"} sx={{fontSize:'70px'}}>
            Development
          </Typography>{" "}
          <Typography variant="h3" justifyContent={"center"}sx={{fontSize:'45px'}}>
            Company
          </Typography>
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
          <video width="100%" height="100%" loop autoPlay muted>
            <source src={adidas} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </>
  );
};

export default Herosection;
