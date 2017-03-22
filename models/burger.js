var orm = require("../config/orm.js");

var burger = {

	all: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		});
	},

	add: function(value, cb){
		orm.add("burgers", "burger_name", value, function(res){
			cb(res);
		});
	},

	update: function(columnValue, conditionalValue, cb){
		orm.update("burgers", "devoured", columnValue, "id", conditionalValue, function(res){
			cb(res);
		});
	},

	delete: function (conditionalValue, cb){
		orm.delete("burgers", "id", conditionalValue, function(res){
			cb(res);
		});
	},

};


module.exports = burger;