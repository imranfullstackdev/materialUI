import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container, Button } from "@mui/material";
import adidas from "./Images/adidas.mp4";

const Charts = () => {
  return (
    <>
      <div>
        <center>
            <Typography variant="h3">Our Progress</Typography>
          <video width="80%" height="80%" loop autoPlay muted>
            <source
              src={
                "https://www.appincubator.io/assets/images/home/top-video.mp4"
              }
              type="video/mp4"
            />
          </video>
        </center>
      </div>
      <div sx={{marginTop:'5px'}}>
<center>
<Typography variant="h3" mb={5}>Our Work </Typography>

</center>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{ background: "black", borderRadius: "15px" }}
        >
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <video width="100%" height="100%" loop autoPlay muted>
              <source
                src={
                  "https://www.appincubator.io/assets/images/home/coding.mp4"
                }
                type="video/mp4"
              />
            </video>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            justifyContent="center"
            order={{ xs: 1, sm: 2 }}
          >
            <video width="100%" height="100%" loop autoPlay muted>
              <source
                src={
                  "https://www.appincubator.io/assets/images/home/mercedes.mp4"
                }
                type="video/mp4"
              />
            </video>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Charts;
