const express = require("express");

// routes
const register = require("./routes/register");
const login = require("./routes/login");
const listStudents = require("./routes/list-students");
const getStudent = require("./routes/get-student");
const editStudent = require("./routes/edit-student");
const deleteStudent = require("./routes/delete-student");
const approveStudent = require("./routes/approve-student");
const mysql = require("mysql");
var app = express();

app.use("/register",register);
app.use("/login",login);
app.use("/get-student",getStudent);
app.use("/approve-student",approveStudent);
app.use("/edit-student",editStudent);
app.use("/delete-student",deleteStudent);
app.use("/list-students",listStudents);

const server = app.listen(8000, function () {
  const host = server.address().address;
  const port = server.address.port;
  console.log("Starting server...");
});

