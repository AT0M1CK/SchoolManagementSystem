// main index file

var express = require("express");
const mysql = require("mysql");
const DatabaseAdapter = require("./api/mysql-adapter");
var database = require("./api/mysql-adapter");
var app = express();

//Database talbes
const userTable = "tbl_users";

const connection = mysql.createConnection({
  host: "localhost",
  user: "studentman",
  password: "study123",
  database: "StudentManagement",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});


app.get("/", function (req, res) {
  res.send("You are on the root of server");
});

app.get("/register", function (req, res) {
  console.log(req.query);
  const { username, email, password } = req.query;
  const result = registerUser(username, email, password);
  res.status(200).send(result);
});

app.get("/login-user", function (req, res) {
  console.log(req.query);
  const { username, password } = req.query;
  
  const queryString = `SELECT * FROM ${userTable} WHERE username = '${username}'`;
  let queryResult ="";
  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    res.status(200).send(result);
  });
  
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address.port;
  console.log("Starting server...");
});

function registerUser(username, email, password) {
  const adapter = new DatabaseAdapter();
  adapter.connect();

  const queryString = `INSERT INTO ${userTable} (username, email, password,status) VALUES ('${username}','${email}','${password}','await-approval')`;
  const result = adapter.query(queryString);

  return result;
}

