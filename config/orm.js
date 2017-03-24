// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  
  all: function (table, callback){
    var queryStr = "SELECT * FROM " + table + ";";

     console.log(queryStr);

    connection.query(queryStr, function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  add: function(table, column, burger, callback){
    var queryStr = "INSERT INTO " + table + "(" + column + ") VALUES (?);";

     console.log(queryStr);

    connection.query(queryStr, [burger],
      function(err, data){
        if(err) throw err;
        callback(data);
      });

  },

  update: function(table, column, columnValue, condition, conditionValue, callback){
    var queryStr = 'UPDATE ' + table + ' SET ' + column + '=?' + 'WHERE ' + condition + '=?;';

     console.log(queryStr);

    connection.query(queryStr, [columnValue, conditionValue], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },

  delete: function(table, condition, conditionValue, callback){
    var queryStr = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?;';

     console.log(queryStr);

    connection.query(queryStr, [conditionValue], function(err, data){
      if(err) throw err;
      callback(data);
    });
  }
};




module.exports = orm;