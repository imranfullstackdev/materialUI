import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Ecommerce = () => {
  return (
    <>
      <center>
        <Typography variant="h3" mt={3} mb={3}>
          E-Commerce Products
        </Typography>
      </center>{" "}
     <center>
     <Grid container spacing={2} direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <video width="100%" height="100%" loop autoPlay muted>
            <source
              src={"https://www.appincubator.io/assets/images/home/zara.mp4"}
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
          <Typography variant="h6" mt={1} mb={1}>
            Zara Shopping App
          </Typography>
          <Typography variant="h5" mt={1} mb={1}>
            <b>An Online Merchandise App Store</b>{" "}
          </Typography>
          <Typography variant="h6" mt={1} mb={1}>
            With this app, you can find the latest fashion catalogs,
            collections, and lookbooks every week.
          </Typography>
        </Grid>
      </Grid>
     </center>
    </>
  );
};

export default Ecommerce;
