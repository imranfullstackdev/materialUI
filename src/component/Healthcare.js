import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container, Button } from "@mui/material";
import adidas from "./Images/adidas.mp4";

const Healthcare = () => {
  return (
    <>
      <Grid container spacing={2} direction="row" alignItems="center" mt={5}>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <center>
            <Typography
              variant="h3"
              justifyContent={"center"}
              sx={{ fontSize: "45px" }}
            >
              Healthcare App
            </Typography>
            <Typography
              variant="h3"
              justifyContent={"center"}
              sx={{ fontSize: "70px" }}
            >
              Development
            </Typography>{" "}
            <Typography
              variant="h3"
              justifyContent={"center"}
              sx={{ fontSize: "45px" }}
            >
              Company
            </Typography>
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
            height={"100%"}
            width={"100%"}
            sx={{ maxWidth: "100vw" }}
            src="https://www.appincubator.io/assets/img/healthcare/digital-healthcare-solutions-accessible-to-everyone.png"
            alt=""
          />
        </Grid>
      </Grid>
      <div>
        <center>
          <Typography variant="h4" mt={5} mb={3}>
            Healthcare App For Changing Markets
          </Typography>
        </center>
        <Typography variant="h6">
          There has been a massive transformation in the Healthcare sector due
          to the Coronavirus outbreak. Approximately 75% of consumers globally
          now prefer a remote form of healthcare instead of going to the
          doctors.
        </Typography>
        <center>
          <img
            src="https://www.appincubator.io/assets/img/healthcare/advantages-of-healthcare-mobile-app-development.png"
            alt=""
          />
        </center>
      </div>
    </>
  );
};

export default Healthcare;
