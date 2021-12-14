var express = require("express");
var router = express.Router();
const users = [
  { id: 0, username: "maria", url: "wedeycode.com" },
  { id: 1, username: "juanito", url: "https://google.com" },
  { id: 2, username: "esteban", url: "http://facebook.com" },
  { id: 3, username: "amina", url: "www.wedeycode.com" },
];
/* GET users listing. */
router.get("/", function (req, res) {
  res.status(200).json(users);
});

module.exports = router;
