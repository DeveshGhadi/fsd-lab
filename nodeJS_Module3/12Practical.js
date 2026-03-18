const http = require("http")
const querystring = require("querystring")

let submittedData = {}   // store data temporarily

const server = http.createServer((req, res) => {

  // Form Page
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write(`
      <h2>Student Form</h2>
      <h3>31-Devesh Ghadigaonkar</h3>
      <form method="POST" action="/submit">
      Name: <input type="text" name="name"><br><br>
      Roll No: <input type="text" name="roll"><br><br>
      <input type="submit" value="Submit">
      </form>
    `)
    res.end()
  }

  // Handle Form Submission
  else if (req.method === "POST" && req.url === "/submit") {
    let body = ""

    req.on("data", chunk => {
      body += chunk
    })

    req.on("end", () => {
      submittedData = querystring.parse(body)

      // Redirect to another page
      res.writeHead(302, { "Location": "/result" })
      res.end()
    })
  }

  // Result Page (NEW PAGE)
  else if (req.method === "GET" && req.url === "/result") {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write(`
      <h2>Submitted Information</h2>
      <p>Name: ${submittedData.name}</p>
      <p>Roll No: ${submittedData.roll}</p>
      <br><a href="/">Go Back</a>
    `)
    res.end()
  }

})

server.listen(3000)
console.log("Server running at http://localhost:3000")