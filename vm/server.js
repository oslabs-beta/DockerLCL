var fs = require("fs");
var http = require("http");
var process = require("process");
var express = require("express");
var app = express();
const StatsController = require('./dockerstats.js')

// app.get("/hello", function (req, res) {
//   res.send({ message: "Hello Velocirabbits!" });
// });

app.get('/stats', StatsController.getContainerStats, (req, res) => {
  res.json(res.locals.stats)
} )
var sock = process.argv[2];

fs.stat(sock, function (err) {
  if (!err) {
    fs.unlinkSync(sock);
  }
  http.createServer(app).listen(sock, function () {
    fs.chmodSync(sock, "777");
    console.log("Express server listening on " + sock);
  });
});
