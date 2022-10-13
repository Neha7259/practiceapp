import React from "react"
import { CardContent,Card, Grid } from "@mui/material"
import { padding } from "@mui/system"
export const CryptoItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card sx={{bgcolor:"#d0bdf4", textAlign:"center", padding:2, borderRadius:10}}>
                <CardContent>
                <img src={item.image} height={100} width={100} />
                <h3>{item.name}</h3>
                <h4>Price ${item.current_price}</h4>
                </CardContent>
            </Card>
        </Grid>
    )
}