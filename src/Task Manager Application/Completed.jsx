import React from "react";
import { useTasks } from "./TaskContext";

function Completed() {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div>
      <h2>Completed Tasks</h2>
      {completedTasks.length === 0 ? (
        <p>No completed tasks.</p>
      ) : (
        completedTasks.map(task => (
          <div key={task.id} className="task done">
            {task.text}
          </div>
        ))
      )}
    </div>
  );
}

export default Completed;
