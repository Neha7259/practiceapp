import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TextField, Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [indexnum, setIndexnum] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const handleAdd = () => {
    if (isEdit == true) {
      data.splice(indexnum, 1, text);
      setText(" ");
      setIndexnum(null);
      setIsEdit(false);
    } else if (text.trim() != "") {
      setData([...data, text]);
      setText("");
    }
  };
  const handleDelete = (index) => {
    const Remove = data.filter((elem, ind) => ind !== index);
    setData(Remove);
  };
  const handleEdit = (item, index) => {
    setText(item);
    setIndexnum(index);
    setIsEdit(true);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            label="Add item"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleAdd}>
            <AddBoxIcon />
          </Button>
        </Grid>
        {data.map((item, index) => {
          return (
            <Grid item xs={7}>
              <TodoItem item={item} />
              <div>
                <Button
                  className="button1"
                  variant="contained"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </Button>
                <Button
                  className="button2"
                  variant="contained"
                  onClick={() => handleEdit(item, index)}
                >
                  <EditIcon />
                </Button>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
