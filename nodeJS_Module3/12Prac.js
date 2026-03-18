task9.js
const http = require('http');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });


    if (req.url === '/') {
        res.end("<h1>Home Page</h1><p>Welcome to the Home Page, Fairy Gangar (26).</p>");
    } else if (req.url === '/student') {
        res.end("<h1>Student Details</h1><p>Name: Fairy | Roll No: 26</p>");
    } else if (req.url === '/contact') {
        res.end("<h1>Contact</h1><p>Contact Fairy atroll26@example.com</p>");
    } else {
        res.writeHead(404);
        res.end("<h1>404 Page Not Found</h1>");
    }
}).listen(3000, () => console.log("Server running at http://localhost:3000"));