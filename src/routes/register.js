const express = require("express");
const router = express.Router();
const connection = require("../database/mysql-connector");

const userTable = "tbl_users";

router.post("/", function (req, res) {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (username && email && password) {
    const queryString = `INSERT INTO ${userTable} (username, email, password,status) VALUES ('${username}','${email}','${password}','await-approval')`;
    const result = connection.query(queryString);
    res.status(200).send({
      message: "User registered successfully",
      username,
      email,
      password
    });
  } else {
    res.status(400).send("missing input");
  }
});

module.exports = router;
