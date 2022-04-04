const express = require("express");
const {
  createPostgre,
  getAllPostgres,
  getDetailPostgre,
  updatePostgre,
  deletePostgre,
} = require("../controllers/postgresController");
const router = express.Router();

//create
router.post("/", createPostgre);

//getall
router.get("/", getAllPostgres);

//getDetail
router.get("/:id", getDetailPostgre);

//update
router.put("/:id", updatePostgre);

//delete
router.delete("/:id", deletePostgre);

module.exports = router;
