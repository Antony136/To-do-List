const { createTodo, getTodo } = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodo);

module.exports = router;