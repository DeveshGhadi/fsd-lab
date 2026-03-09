import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import ThemeContext from "./ThemeContext";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const theme = "light";

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  useEffect (() => {
    console.log("Tasks updated: ", tasks);
  }, [tasks]);
//hooks, react-router-dom implement it in Task Manage app to navigate to a
//specific task

//React - complete coding prashant 
//MEN - Harkirat Singh

  return (
    <ThemeContext.Provider value={theme} >
      <div className="App">
        <h1>Task Manager App</h1>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
