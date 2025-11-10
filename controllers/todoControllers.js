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













const getTodo = async(req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({"error": "Cannot get the tasks"});
    }
};


module.exports = { createTodo, getTodo };