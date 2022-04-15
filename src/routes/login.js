const express = require("express");
const router = express.Router();
const connection = require("../database/mysql-connector");

const userTable = "tbl_users";

router.post("/", function (req, res) {
  console.log(req.query);
  const { username, password } = req.body;

  const queryString = `SELECT * FROM ${userTable} WHERE username = '${username}' AND password = '${password}'`;

  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
    if (result.length) {
      res.status(200).send({
        message: `${username} logged in successfully`
      });
    } else {
      res.status(403).send({
        error: "User not found"
      })
    }
  });
});

module.exports = router;
