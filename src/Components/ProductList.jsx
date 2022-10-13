import React, { useState, useEffect } from "react";
import { Grid, TextField, Rating, Button } from "@mui/material";
import { ProductItem } from "./ProductItem";
import axios from "axios";
export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filtData, setFiltData] = useState([]);
  const [text, setText] = useState("");
  const [cat, setCat] = useState("");
  const [catData, setCatData] = useState([]);
  const [rate, setRate] = useState(0);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setFiltData(result.data);
    setData(result.data);
    const resultCat = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCatData(resultCat.data);
  };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toUpperCase().includes(item.toUpperCase()) ||
        item.category.toUpperCase().includes(item.toUpperCase())
    );
    setFiltData(filtered);
  }, [text]);

  useEffect(() => {
    const exclude = data.filter((item) => item.category === cat);
    setFiltData(exclude);
    setText("");
  }, [cat]);

  useEffect(() => {
    const RateStar = data.filter(
      (item) => Math.round(item.rating.rate) >= rate
    );
    setFiltData(RateStar);
  }, [rate]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            label="Search..."
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <Rating
            name="Rate me"
            value={rate}
            onChange={(e, val) => setRate(val)}
          />
        </Grid>
        {catData.map((item) => (
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={() => setCat(item)}>
              {item}
            </Button>
          </Grid>
        ))}
        {filtData.length > 0 &&
          filtData.map((item) => <ProductItem item={item} />)}
      </Grid>
    </div>
  );
};
