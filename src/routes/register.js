const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    console.log(req.query);
   
    res.status(200).send("register route");
  });

  router.get("/test", function (req, res) {
    console.log(req.query);
   
    res.status(200).send("register test  route");
  });

  module.exports = router;