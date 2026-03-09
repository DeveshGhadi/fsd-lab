import { useState } from "react";
import { useNavigate } from "react-router-dom";
function TaskForm({addTask}) {
    const [task, setTask] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim() === "") return;
        addTask(task);
        setTask("");
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit} className="card">
            <input 
            type="text" 
            placeholder="Enter Task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
        </form>
    );
}

export default TaskForm;