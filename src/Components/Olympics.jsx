import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TableBody,
  //   Stack,
  //   Pagination,
} from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import axios from "axios";
export const Olympics = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(20);

  const getData = async () => {
    const result = await axios.get(
      "https://www.ag-grid.com/example-assets/olympic-winners.json"
    );
    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "lavender" }}>
              <TableCell>Athlete</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Sport</TableCell>
              <TableCell>Gold</TableCell>
              <TableCell>Silver</TableCell>
              <TableCell>Bronze</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page - 20, page).map((item) => {
              return (
                <TableRow>
                  <TableCell>{item.athlete}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.sport}</TableCell>
                  <TableCell>{item.gold}</TableCell>
                  <TableCell>{item.silver}</TableCell>
                  <TableCell>{item.bronze}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack>
        <Pagination
          count={Math.round(data.length / 20)}
          onChange={(e, v) => setPage(v * 20)}
        />
      </Stack>
    </div>
  );
};
