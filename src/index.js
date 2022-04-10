// main index file

var express = require("express");
const DatabaseAdapter = require("./api/mysql-adapter");
var database = require("./api/mysql-adapter");
var app = express();

//Database talbes
const userTable = "tbl_users";

app.get("/", function (req, res) {
  res.send("You are on the root of server");
});

app.get("/register", function (req, res) {
  console.log(req.query);
  const { username, email, password } = req.query;
  const result = registerUser(username, email, password);
  res.send("ok", result);
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address.port;
  console.log("Starting server...");
});

function registerUser(username, email, password) {
  const adapter = new DatabaseAdapter();
  adapter.connect();

  const queryString = `INSERT INTO ${userTable} (username, email, password) VALUES ('${username}','${email}','${password}')`;
  const result = adapter.query(queryString);

  return result;
}
