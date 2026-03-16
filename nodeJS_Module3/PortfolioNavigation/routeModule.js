const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    if(req.url == "/"){
        fs.readFile("indextwo.html",(err,data)=>{
            res.writeHead(200,{"content-type":"text/html"});
            res.write((data));
            res.end();
        });
    }

    else if(req.url == "/education"){
        fs.readFile("education.html",(err,data)=>{
            res.writeHead(200,{"content-type":"text/html"});
            res.write((data));
            res.end();
        });
    }

    else if(req.url == "/project"){
        fs.readFile("project.html",(err,data)=>{
            res.writeHead(200,{"content-type":"text/html"});
            res.write((data));
            res.end();
        });
    }
    else 
        res.end("Invalid Request!!");

});

server.listen(3000);
console.log("server running on http://localhost:3000");



//-------------------------------
// var http = require('http');

// var server2 = http.createServer(function(req, res){

//     if(req.url == '/')
//     {
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write('<html><body><p>This is Home Page</p></body></html>');
//         res.end();
//     }

//     else if(req.url == "/about")
//     {
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write('<html><body><p>This is About Page</p></body></html>');
//         res.end();
//     }
//     else if(req.url == "/contact")
//     {
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write('<html><body><p>This is Contact Page</p></body></html>');
//         res.end();
//     }
//     else
//         res.end('Invalid Request!');

// });
// server.listen(5000);

// console.log("Server running at http://localhost:5000");