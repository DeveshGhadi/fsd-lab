const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.method=="GET"){
        fs.readFile("userRegistration.html",(err,data)=>{
                    res.writeHead(200,{"content-type":"text/html"});
                    res.write((data));
                    res.end();
                });
    }
    else if(req.url === "/register" && req.method =="POST"){
        res.write("<h1>User Registered Successfully!!</h1>");
        res.end();
    };
});

server.listen(3000);
console.log("server running on http://localhost:3000");