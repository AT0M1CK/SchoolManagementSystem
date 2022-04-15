const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    console.log(req.query);
   
    res.status(200).send("student route");
  });

  module.exports = router;