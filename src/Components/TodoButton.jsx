import React from "react"
import { Grid,Button } from "@mui/material"
export const TodoButton = ( {
     handleAdd}) => {
    return (
            <Grid item xs={4}>
            <Button variant="contained" onClick={handleAdd}>Add item</Button>
            </Grid>
    )
}



