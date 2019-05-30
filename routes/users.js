var express = require('express');
var router = express.Router();
var names = [
  {name: "Emmanuel"},
  {name: "Mayra"},
  {name: "Juan"}
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/names', function(req, res, next) {
  res.send(JSON.stringify(names));
});

module.exports = router;
