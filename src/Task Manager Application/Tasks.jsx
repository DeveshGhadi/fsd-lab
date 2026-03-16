import React from "react";
import { useTasks } from "./TaskContext";

function Tasks() {
  const { tasks, toggleTask, deleteTask } = useTasks();

  return (
    <div>
      <h2>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className={`task ${task.completed ? "done" : ""}`}>
            <span onClick={() => toggleTask(task.id)}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Tasks;
