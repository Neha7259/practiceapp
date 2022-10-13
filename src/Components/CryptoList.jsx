import React, { useEffect, useState } from "react";
import { Grid, TextField, Pagination, Stack } from "@mui/material";
import { CryptoItem } from "./CryptoItem";
import axios from "axios";
export const CryptoList = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(8);

  const getData = async () => {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setFilterData(result.data);
    setData(result.data);
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toUpperCase().includes(text.toUpperCase())
    );
    setFilterData(filtered);
    console.log("filtered", filtered);
  }, [text]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            label="Search..."
            fullWidth
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={4}></Grid>
        {filterData.length > 0 &&
          filterData
            .slice(page - 8, page)
            .map((item) => <CryptoItem item={item} />)}
      </Grid>
      <Stack>
        <Pagination
          count={Math.round(filterData.length / 8)}
          onChange={(e, value) => setPage(value * 8)}
        />
      </Stack>
    </div>
  );
};
