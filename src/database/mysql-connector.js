const mysql = require("mysql");
const credentials = require("../config/db");

const connection = mysql.createConnection(credentials);
  
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Server!");
  });

  module.exports = connection;