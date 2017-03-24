var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// router.post("/add"), function(req, res){
// 	burger.add(["burger_name"], [req.body.burger_name], function(response){
// 		res.redirect('/');
// 	})
// 	console.log(res);
// }

router.post("/add", function(req, res) {
  burger.add(["id", "burger_name"], [req.body.id, req.body.burger_name], function(response){
  	res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;