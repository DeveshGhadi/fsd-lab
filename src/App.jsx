
import './App.css'
import { Counter } from './Counter'
import { PackingList } from './PackingList'
import { TaskForm } from './Task Manager/TaskForm';
import { useState } from 'react';
import { TaskList } from './Task Manager/TaskList';
function App() {
  const[tasks,setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }


  return (
    <div className='App'>
      <h1>31-Devesh Ghadigaonkar</h1>
      <h2>Task Manager</h2>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks ={tasks}/>
    </div>
  )
}

export default App
