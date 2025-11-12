import React, { useState } from "react";

function TodoForm() {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we will send POST request to backend
        console.log("Todo submitted:", title);
        setTitle("");
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
