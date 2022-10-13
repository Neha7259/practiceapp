import React from "react";
import { CardContent, Card, Grid,Rating } from "@mui/material";
export const CommentItem = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <h2> {item.title.slice(10)+"..."} </h2>
          <h3>Price: $ {item.price} </h3>
          <h4> {item.category} </h4>
          <img src={"item.image" } height={200} width={200} />
          <Rating name="rate" value={item.rating.rate}/>
        </CardContent>
      </Card>
    </Grid>
  );
};
