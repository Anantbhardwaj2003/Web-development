const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello World, This is my Node.js server");
    res.end();
  })
  .listen(10000, function () {
    console.log("server started at port 10000");
  });