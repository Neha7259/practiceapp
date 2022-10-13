import React, {useState} from "react"
import { Grid, TextField,Card,CardContent } from "@mui/material";
import {TodoButton} from "./TodoButton"
export const ParentTodo = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    setData([...data, text])
    setText("")
  }
    return (
    <div>
      <h1>To Do uplifted</h1>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField variant="outlined"  value={text} onChange={(e)=>setText(e.target.value)} fullWidth/>
        </Grid>
        <Grid item xs={3}>
          <TodoButton data={data} handleAdd={handleAdd}/>
        </Grid>
      {data.map((item)=>{
          return(
            <>
            <Grid item xs={8}>
              <Card>
                <CardContent>
                    {item}
                </CardContent>
              </Card>
            </Grid>
                </>
              )})}
            </Grid>
        </div>
    )

}
  
