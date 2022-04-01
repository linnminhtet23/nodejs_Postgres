const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const {
  createPostgre,
  getAllPostgres,
  getDetailPostgre,
  updatePostgre,
  deletePostgre,
} = require("./controllers/postgresController.");

//middlewares
app.use(cors());
app.use(express.json()); //req.body

//Routes

//create
app.post("/todos", createPostgre);

// getAll
app.get("/todos", getAllPostgres);
//get
app.get("/todos/:id", getDetailPostgre);

//update
app.put("/todos/:id", updatePostgre);

//delete
app.delete("/todos/:id",deletePostgre);

app.listen(3000, () => {
  console.log("server has started on port 3000");
});
