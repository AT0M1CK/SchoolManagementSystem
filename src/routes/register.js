const express = require("express");
const router = express.Router();
const connection = require("../database/mysql-connector");

const userTable = "tbl_users";

router.post("/", function (req, res) {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (username && email && password) {
   isExistingUsername(username,function(status){
     if(status){
       console.log("User exists");
       res.status(400).send({
        error: "User already exists"
      });
     }else{
      //console.log("User does not exist");
      const queryString = `INSERT INTO ${userTable} (username, email, password,status) VALUES ('${username}','${email}','${password}','await-approval')`;

      connection.query(queryString, function (err, result) {
        if (err) {
          throw err;
        }
        res.status(200).send({
          message: "User registered successfully",
          username,
          email,
          password,
        });
     });
     }
   })

  } else {
    res.status(400).send({
      error: "Invalid input",
    });
  }
});

function isExistingUsername(username, callback){
  const queryString = `SELECT * FROM ${userTable} WHERE username = '${username}'`;

  connection.query(queryString, function (err, result) {
    if (err) {
      throw err;
    }
   
    if (result.length) {
      callback(true);
    } else {
     callback(false);
    }
  });

  
  
  
}

module.exports = router;
