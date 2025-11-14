const { createTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todoControllers");
const express = require("express");
const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;