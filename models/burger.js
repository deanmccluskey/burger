// burger.js

// Import ORM to create functions that will interact with database
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

// Export database functions for controller (burger_controller.js).
module.exports = burger;
