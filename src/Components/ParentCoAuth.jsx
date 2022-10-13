import React, { useState } from "react";
import { ChildCoAuth } from "./ChildCoAuth";
import { Grid, TextField,  } from "@mui/material";  

export const ParentCoAuth = () => {
  const [data, setData] = useState("");
  

  const handleChange = (value) => {
    setData(value);
  };


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            variant="outlined"
            onChange={(e) => setData(e.target.value)}
            value={data}
          />
        </Grid>
        <ChildCoAuth data={data} handleChange={handleChange} />
      </Grid>
    </div>
  );
};
