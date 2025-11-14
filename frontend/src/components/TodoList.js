import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const toggleComplete = async (id, newStatus) => {
        try {
            const res = await axios.patch(`http://localhost:5000/api/todos/${id}`, {
                completed: newStatus
            });

            setTodos(
                todos.map((todo) =>
                    todo._id === id ? { ...todo, completed: res.data.completed } : todo
                )
            );
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    const fetchTodos = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/todos");
            setTodos(res.data);
            console.log("Fetched todos:", res.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            setTodos(todos.filter((todo) => todo._id !== id)); // remove from UI instantly
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.title} {todo.completed ? "✅" : "❌"}{" "}
                        <button onClick={() => toggleComplete(todo._id, !todo.completed)}>
                            {todo.completed ? "Undo" : "Done"}
                        </button>
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
