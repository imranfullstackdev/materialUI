import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container, Button, ListItem } from "@mui/material";
import adidas from "./Images/adidas.mp4";

const Socialmedia = () => {
  return (
    <>
      <center>
        <Typography variant="h3">Digital Marketing</Typography>
      </center>

      <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <center>
            <Typography
              variant="h3"
              justifyContent={"center"}
              sx={{ fontSize: "45px" }}
            >
              What is Social Networking?
            </Typography>
            <Typography variant="h6" justifyContent={"center"}>
              Social Networking is no Surprise for anyone, but what is it
              exactly, and why you need to know about it. In simple words,
              social networking is a digital tool for communication, it was
              first built for computers, but today because of its massive
              popularity and easy accessibility it is available in the form of
              smartphone applications. AppIncubator, as a leading social
              networking app development company, offers you unmatched solutions
              for your social media mobile app. We have proficiency in
              developing social network applications as per the requirements and
              needs of our clients.
            </Typography>
            <Button
              sx={{ background: "black", color: "white", marginTop: "15px" }}
              size="large"
            >
              Book A Consultant 
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
            sx={{ maxWidth: "100vw" }}
            src="https://www.appincubator.io/assets/images/sn/what-is-social-networking.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Socialmedia;
