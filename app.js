const express = require('express');
const cors = require('cors');
const app= express();
const pool = require('./db');

//middlewares
app.use(cors());
app.use(express.json());//req.body

//Routes

//create 
app.post("/todos", async(req, res)=>{
  try{
    const{description}=req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    res.json(newTodo);
  }catch(error){
    console.log(error);
  }

})

// getAll 

//get

//update

//delete



app.listen(3000,()=>{
  console.log("server has started on port 3000");
});