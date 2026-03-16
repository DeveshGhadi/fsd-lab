// import React, { createContext, useContext, useState } from "react";

// const TaskContext = createContext();

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (text) => {
//     const newTask = {
//       id: Date.now(),
//       text: text,
//       completed: false
//     };
//     setTasks([...tasks, newTask]);
//   };

//   const toggleTask = (id) => {
//     setTasks(
//       tasks.map(task =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export const useTasks = () => {
//   return useContext(TaskContext);
// };

import React, { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};