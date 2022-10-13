import React, {useState,useEffect} from "react"
import { PhotoItem } from "./PhotoItem"
import { Grid } from "@mui/material"
import axios from "axios"
export const PhotoList=()=>{
    const[data,setData]=useState([])
    const getData=async()=>{
        const result= await axios.get("https://jsonplaceholder.typicode.com/photos")
        setData(result.data)
    }
    
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <Grid container spacing={3}>
    {data.length>0 && data.slice(4990).map((item)=><PhotoItem item={item}/>)}
            </Grid>
        </div>
    )
}