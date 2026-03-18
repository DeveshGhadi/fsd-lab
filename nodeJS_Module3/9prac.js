const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end(`
            <h1>Home Page</h1>
            <h2>31-Devesh Ghadigaonkar</h2>
            <p>Welcome to my website</p>
        `);
    }
    else if (req.url === "/about") {
        res.end(`
            <h1>About Page</h1>
            <h2>31-Devesh Ghadigaonkar</h2>
            <p>This is about us</p>
        `);
    }
    else if (req.url === "/contact") {
        res.end(`
            <h1>Contact Page</h1>
            <h2>31-Devesh Ghadigaonkar</h2>
            <p>Email: deveshghadigaonkar@gmail.com</p>
        `);
    }
    else {
        res.end(`
            <h1>404</h1>
            <p>Page not found</p>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});