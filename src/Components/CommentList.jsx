import React, { useState, useEffect } from "react";
import { CommentItem } from "./CommentItem";
import axios from "axios";
import { Grid } from "@mui/material";
export const CommentList = () => {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products/category/jewelery");
    setData(result.data);
  };

 

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Comment</h1>
      <Grid container spacing={3}>
        {data.length > 0 &&
          data.slice(50).map((item) => <CommentItem item={item} />)}
      </Grid>
    </div>
  );
};
