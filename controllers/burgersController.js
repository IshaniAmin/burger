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


router.post("/new"), function(req, res){
	burger.add(req.body.burger, function(res){
		res.redirect('/');
	})
	console.log(res);
}

module.exports = router;