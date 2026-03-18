const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Serve HTML form
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/15index.html");
});

app.post("/result", (req, res) => {
    const { name, email, password } = req.body;

    const formhtml = `
        <html>
            <head><title>Form Data</title></head>
            <body>
                <h1>Submitted Data</h1>
                <h2>31-Devesh Ghadigaonkar</h2>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Password: ${password}</p>
            </body>
        </html>
    `;

    res.send(formhtml);
});

app.listen(3000, () => {
    console.log("Server is running");
});