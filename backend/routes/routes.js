const express = require("express");

const router = express.Router();

router.route("/test").get((req, res) => {
  res.status(200).send("success");
});

module.exports = router;
