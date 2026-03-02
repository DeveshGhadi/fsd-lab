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
            onChange={(e) => setTask(e.target.value)} />
            <button>Add Task</button>
        </form>
    </div>
  )
}
