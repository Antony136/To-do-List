const Todo = require("../models/todoModel");

const createTodo = async(req, res) => {
    try{
        const { title } = req.body;
        const todo = await Todo.create({ title });
        res.status(201).json(todo);
    }catch(error){
        res.status(500).json({message : "Error Creating task"});
    }
};

module.exports = { createTodo };