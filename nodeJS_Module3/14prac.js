const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>31-Devesh Ghadigaonkar</h1>
        <h1>Hello</h1>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    `);
});

app.get("/about", (req, res) => {
    res.send(`
                <h1>31-Devesh Ghadigaonkar</h1>
        <h1>Hello About</h1>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
    `);
});

app.get("/contact", (req, res) => {
    res.send(`
                <h1>31-Devesh Ghadigaonkar</h1>
        <h1>Hello Contact</h1>
        <a href="/">Home</a>
        <a href="/about">About</a>
    `);
});

app.listen(3000, () => {
    console.log("Server is running");
});