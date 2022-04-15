const mysql = require("mysql");

class DatabaseAdapter {
  constructor() {
    this.connection = null;
  }

  connect() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "studentman",
      password: "study123",
      database: "StudentManagement",
    });

    this.connection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
  }

  query(queryString) {
    this.connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      //console.log("Query result",result);
      return result;
    });
  }
}

module.exports = DatabaseAdapter;
