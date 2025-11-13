import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/todos");
            setTodos(res.data);
            console.log("Fetched todos:", res.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.title} {todo.completed ? "✅" : "❌"}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
