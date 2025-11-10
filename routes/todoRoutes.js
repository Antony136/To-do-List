const { createTodo } = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

router.post("/", createTodo);

module.exports = router;