const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(` <h2>Student Form</h2>
        <h3>31-Devesh Ghadigaonkar</h3>
                <form method="POST">
                Name: <input type="text" name="name"><br><br>
                Roll No: <input type="text" name="roll"><br><br>
                <input type="submit" value="Submit">
                </form>`)
        res.end()
    }

    else if (req.method === "POST") {
        let body = ""
        req.on("data", chunk => {
            body += chunk
        })

        req.on("end", () => {
            const data = querystring.parse(body)
            res.writeHead(200, { "Content-Type": "text/html" })
            res.write(` <h2>Submitted Information</h2>
                  <p>Name: ${data.name}</p>
                  <p>Roll No: ${data.roll}</p>
                  <br><a href="/">Go Back</a>`)
            res.end()
        })
    }

})

server.listen(3000)
console.log("Server running at http://localhost:3000")
