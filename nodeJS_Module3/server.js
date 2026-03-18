const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("Welcome! 31-Devesh Ghadigaonkar");
    res.end();
});

server.listen(5000,()=>{
    console.log("Server running on port 5000!!!!");
    console.log("http://localhost:5000");
})