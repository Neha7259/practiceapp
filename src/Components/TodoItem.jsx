import React from "react"
import { Grid,CardContent,Card } from "@mui/material"
export const TodoItem=({item})=>{
    return(
        
        <Grid item xs={12}>
            
            <Card sx={{bgcolor:"pink", borderRadius:10, textAlign:"center"}}>
                <CardContent>
                    {item}
                </CardContent>
            </Card>
            </Grid>
    
        
    )
}