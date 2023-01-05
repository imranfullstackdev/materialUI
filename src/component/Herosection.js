import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container,Button } from "@mui/material";

const Herosection = () => {
  return (
    <>
      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
          <Typography variant="h3">Hii we re Lmv It Solution</Typography>
          <Typography variant="h5">
            We Are One Of The Leading Software Comapany In Hyderabad
          </Typography>
          <Button variant="contained" size="large" sx={{borderRadius:5,justifyContent:'center'}}>Contact Us</Button>
        </Grid>
        <Grid item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
          <Box
            component={"img"}
            src={
              "https://raw.githubusercontent.com/mukeshphulwani66/MUI-Cake-shop/main/src/images/cake.png"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Herosection;
