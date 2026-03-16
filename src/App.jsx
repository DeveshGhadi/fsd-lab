
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskProvider } from './Task Manager Application/TaskContext';
import Navbar from "./Task Manager Application/Navbar";
import Dashboard from './Task Manager Application/Dashboard';
import Tasks from './Task Manager Application/Tasks';
import AddTask from './Task Manager Application/AddTask';
import Completed from './Task Manager Application/Completed';
import About from './Task Manager Application/About';


function App() {
  // const[tasks, setTasks] = useLocalStorge("tasks", []);
  // const theme = "light";

  // const addTask = (task) => {
  //   setTasks([...tasks, task]);
  // }
  // useEffect (() => {
  //     console.log("Tasks updated: ", tasks);
  //   }, [tasks]);

  // const [result, setResult] = useState(0);

  // const handleClick = () => {
  //   setResult(10 + 20);
  // };

  return (
   
            <TaskProvider>
      <BrowserRouter>
        <div className="app">
          <header className="header">
            <h1>Task Management Application</h1>
            <h3>31-Devesh Ghadigaonkar</h3>
            <Navbar />
          </header>

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/add" element={<AddTask />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TaskProvider>

      

    
  );
}

export default App
