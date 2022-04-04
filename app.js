const express = require("express");
const cors = require("cors");
const app = express();
const postGresRouter = require("./routes/postgresRoute");
const userRouter = require("./routes/usersRoutes");
require("dotenv").config();
const morgan = require("morgan");
//middlewares
app.use(cors());
app.use(express.json()); //req.body
app.use(morgan('dev'))

app.use("/api/todos",postGresRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("server has started on port 3000");
});
