import React, { useState } from "react";
import axios from "axios";

function TodoForm() {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/todos", {
                title: title
            });
            console.log("Todo added:", res.data);
            setTitle(""); // clear input after success
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
