const http = require("http");
const port = 5000;

function behavior(req, res) {
  if (req.method === "GET" && req.url === "/books") {
    res.write(`Things fall apart ${req.url} endpoint with the ${req.method}`);
  } 
  else if (req.method === "PUT" && req.url === "/books") {
    res.write(`you requested ${req.url} endpoint with the ${req.method}`);
  } else if (req.method === "DELETE" && req.url === "/books") {
    res.write(`you requested ${req.url} endpoint with the ${req.method}`);
  } else if (req.method === "GET" && req.url === "/books/author") {
    res.write(`you requested ${req.url} endpoint with the ${req.method}`);
  } else if (req.method === "POST" && req.url === "/books/author") {
    res.write(`you requested ${req.url} endpoint with the ${req.method}`);
  } else if (req.method === "PUT" && req.url === "/books/author") {
    res.write(`you requested ${req.url} endpoint with the ${req.method}`);
  }
  res.end();
}

const server = http.createServer(behavior);

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});