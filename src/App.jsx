
import './App.css'
import { Counter } from './Counter'
import { PackingList } from './PackingList'
import TaskForm from "./Task Manager Hooks/TaskForm";
import { useState, useEffect } from 'react';
import TaskList  from './Task Manager Hooks/TaskList';
import Profile from "./ProfileCard/Profile";
import EventHandler from './EventHandler';
import ToggleSwitch from './ToggleSwitch';
import SubmittedForm from './SubmittedForm';
import KeyCounter from './KeyCounter';
import Component1 from './Component1';
import ThemeContext from './Task Manager Hooks/ThemeContext';
import useLocalStorge from './Task Manager Hooks/useLocalStorage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import TaskDetails from "./TaskDetails";

function App() {
  
  
    const theme = "dark";
  const[tasks,setTasks] = useLocalStorge("tasks", []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  useEffect (() => {
      console.log("Tasks updated: ", tasks);
    }, [tasks]);

  const [result, setResult] = useState(0);

  const handleClick = () => {
    setResult(10 + 20);
  };

  return (
    
      <ThemeContext.Provider value={theme} >
      <div className="App">
        <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskList tasks={tasks}/>} />
            <Route path="/add" element={<TaskForm addTask={addTask} />} />
            <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} />} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
    
  )
}

export default App
