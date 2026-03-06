import React from 'react'
import { useState } from 'react';
export const TaskForm = ({addTask}) => {
    const [task,setTask] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.trim()==" ") return;
        addTask(task);
        setTask("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Enter Task' 
            value={task} 
            style={{ width: "300px", height: "30px", fontSize: "16px" }}
            onChange={(e) => setTask(e.target.value)} />
            <button>Add Task</button>
        </form>
    </div>
  )
}
