//non-blocking execution example
// console.log("start");
// setTimeout(() => {
//     console.log("Task Completed!");
// }, 3000);
// console.log("end");

//-------------------------------------------------------------

//blocking execution example
// console.log("Start");
// for (i = 0; i <= 500; i++) {
//     console.log(i);
// }
// console.log("End");


//----------------------------------------------------------------

// const fs = require("fs");

// fs.writeFileSync("test.txt","Node JS Core Module !!!");

// console.log("File Created!!");


//-----------------------------------------
// const math = require('./math');
// console.log("Addition (4+5): ",math.add(4,5));
// console.log("Multiplication (8*9): ",math.multiply(8,9));
// console.log("Division (20/5): ",math.divide(20,5));
// console.log("Substraction (10-5): ",math.substract(10,5));

//----------------------------------------------
// using Express and cors for API creation
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

app.listen(5000, () => {
    console.log("Server running on port 5000!!!");
    console.log("31-Devesh Ghadigaonkar");
    console.log("http://localhost:5000/tasks");

});