//non-blocking execution example
// console.log("start");
// setTimeout(() => {
//     console.log("Task Completed!");
// }, 3000);
// console.log("end");

//----------------------------------------------------------------

// const fs = require("fs");

// fs.writeFileSync("test.txt","Node JS Core Module !!!");

// console.log("File Created!!");


//-----------------------------------------
// const math = require('./math');
// console.log(add(4,5));
// console.log(multiply(8,9));

//----------------------------------------------
//using Express and cors for API creation
const express = require("express");
const cors = require("cors");

const app = express();

const tasks = [
    { id: 1, task: "Study React" },
    { id: 2, task: "Create a Node JS server" }
];

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.listen(5000,()=>{
    console.log("Server running on port 5000!!!");
});