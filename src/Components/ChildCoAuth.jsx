import React from "react"
import { Grid, TextField } from "@mui/material"
export const ChildCoAuth = ({data, handleChange}) => {
    console.log(data)
    return (
        <Grid item xs={6}>
            <TextField value={data} onChange={(e)=>handleChange(e.target.value)}/>
        </Grid>
    )
}
