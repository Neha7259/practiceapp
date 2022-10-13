import React from "react"
import {Link} from "react-router-dom"
import { Grid } from "@mui/material"
export const Nav=()=>{
    return(
        <div>
            <Grid container spacing={2}>
            
            <Grid item xs={1}>
            <Link to="/home">Home</Link>
            </Grid>

            <Grid item xs={1}>
            <Link to="/commentlist">Comment</Link>
            </Grid>

            <Grid item xs={1}>
            <Link to="/photolist">Photolist</Link>
            </Grid>

            <Grid item xs={1}>
            <Link to="/productlist">Product</Link>
            </Grid>

            <Grid item xs={1}>
                <Link to="/crypto">Crypto</Link>
            </Grid>

            <Grid item xs={1}>
            <Link to="/coauth">CoAuth</Link>
            </Grid>

            <Grid item xs={1}>
            <Link to="/todouplifted">Todo1</Link>
            </Grid>

            </Grid>
        </div>
    )
}