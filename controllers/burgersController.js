var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get("/", function(req, res){
	burger.all(function(data){
		res.render("index", {
			burgers : data
		})
		console.log(data);
	})
})


router.post("/add"), function(req, res){
	burger.add(["burger_name"], [req.body.burger_name], function(response){
		res.redirect('/');
	})
	console.log(res);
}

module.exports = router;