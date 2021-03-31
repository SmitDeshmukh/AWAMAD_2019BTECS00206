const http = require("http");
const host = 'localhost';
const port = 8080;
const requestListener = function (req, res) {
 res.setHeader("Content-Type", "text/html");
 res.writeHead(200);
 res.end(`<h1>Welcome <br> Hello, I'm Smit</h1>`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
 console.log(`Server is running on http://${host}:${port}`);
});