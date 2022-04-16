const express = require("express");
const router = express.Router();
const connection = require("../database/mysql-connector");

const userTable = "tbl_users";

router.post("/", function (req, res) {
  console.log(req.query);

  const { id, Grade } = req.body;
  console.log(req.body);

  const queryString = `UPDATE ${userTable} SET Grade = '${Grade}' WHERE id = '${id}'`;

  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
    res.status(200).send({
      message: `User ${id} updated`,
    });
  });
});

module.exports = router;
