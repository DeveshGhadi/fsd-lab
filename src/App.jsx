
import './App.css'
import { Counter } from './Counter'
import { PackingList } from './PackingList'
import { TaskForm } from './Task Manager/TaskForm';
import { useState } from 'react';
import { TaskList } from './Task Manager/TaskList';
import Profile from "./ProfileCard/Profile";
import EventHandler from './EventHandler';
import ToggleSwitch from './ToggleSwitch';
import SubmittedForm from './SubmittedForm';
import KeyCounter from './KeyCounter';
import Component1 from './Component1';
function App() {
  const[tasks,setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const [result, setResult] = useState(0);

  const handleClick = () => {
    setResult(10 + 20);
  };

  return (
    <div className='App'>
      <h3>31-Devesh Ghadigaonkar</h3>
            <Component1/>


    </div>
  )
}

export default App
