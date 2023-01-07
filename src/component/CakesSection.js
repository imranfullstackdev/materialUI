import React from "react";
import { Typography } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material/";
import { Stack } from "@mui/system";

const CakesSection = () => {
  const cakes = [
    {
      name: "Strategy",
      image: "https://www.appincubator.io/assets/images/strategy.svg",
message:`${"Understand our client's objectives Strategize client's needs Proposing an efficient solution"}`,
    },
    {
      name: "Design & Development",
      image: "https://www.appincubator.io/assets/images/design&testing.svg",
      message:"Blueprint app’s structure Designing the app Develop the app"

    },
    {
      name: "Testing & Maintenance",
      image: "https://www.appincubator.io/assets/images/development.svg",
      message: "Test the developed app Deploy Complete solution Post-Deployment Support",
    },
  ];
  return (
    <>
      <center>
        <Typography variant="h3" mt={4} mb={5}>
          Our Work Strategies
        </Typography>
      </center>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={3}
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
        {cakes.map((cake) => {
          return (
            <Card sx={{ maxWidth: 345, cursor: "pointer" }} key={Math.random()}>
              <CardMedia
                component="img"
                height="300"
                width={"500"}
                maxWidth={"100%"}
                image={cake.image}
              />
              <CardContent>
                <Typography variant="h5">{cake.name}</Typography>
                <Typography variant="body2 " color="text.secondary">
                 {cake.message}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default CakesSection;
