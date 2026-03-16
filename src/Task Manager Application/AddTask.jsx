import React, { useState } from "react";
import { useTasks } from "./TaskContext";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
    navigate("/tasks");
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
        className="custom-input"
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
