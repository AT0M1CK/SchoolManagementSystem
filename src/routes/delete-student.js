const express = require("express");
const router = express.Router();

const connection = require("../database/mysql-connector");

const userTable = "tbl_users";

router.post("/", function (req, res) {
  console.log(req.query);

  const { id } = req.body;

  const queryString = `DELETE FROM ${userTable} WHERE id = '${id}'`;

  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    res.status(200).send({
      message: `User ${id} removed`,
    });
  });
});

module.exports = router;
