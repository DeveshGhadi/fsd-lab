import React from "react";
import { useTasks } from "./TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="card">Total Tasks: {total}</div>
        <div className="card">Completed: {completed}</div>
        <div className="card">Pending: {pending}</div>
      </div>
    </div>
  );
}

export default Dashboard;
