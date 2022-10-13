import React from "react"
import { CardContent,Card,Grid, ListItem } from "@mui/material"
export const PhotoItem=({item})=>{
    return(
        <Grid item xs={4}>
            <Card sx={{bgcolor:"lightseagreen", textAlign:"center", padding:2}}>
            <img src={item.url} width={200} height={150}/> <br />
            <img src={item.thumbnailUrl} height={50} />
                <CardContent>
                <h3>{item.title}</h3>
                </CardContent>
            </Card>
        </Grid>
    )
}