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
        res.status(500).json({ message: "Cannot get the tasks" });
    }
};

const updateTodo = async(req, res) => {
    try{
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.status(200).json(todo);
    }catch(error){
        res.status(500).json({ message : "Cannot Update task"});
    }
};

const deleteTodo = async(req, res) => {
    try{
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({ message : "Task Deleted Successfully"});
    }catch(error){
        res.status(500).json({ message : "Cannot Delete Task"});
    }
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };