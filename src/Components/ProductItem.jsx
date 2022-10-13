import React from "react";
import { CardContent, Card, Grid, Rating } from "@mui/material";
export const ProductItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card
        sx={{
          bgcolor: "pink",
          textAlign: "center",
          padding: 2,
          borderRadius: 10,
        }}
      >
        <CardContent>
          <img src={item.image} height={150} width={200} />
          <h3>{item.title}</h3>
          <h4>Price $ {item.price}</h4>
          <h4> {item.category}</h4>
          <Rating name="Rate" value={item.rating.rate} fullWidth />
          {"(" + item.rating.count + ")"}
        </CardContent>
      </Card>
    </Grid>
  );
};
