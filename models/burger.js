var orm = require("../config/orm.js");


    let selectAll = (cb) => {
        orm.all("burgers", function(result) {
            cb(result);
        });
    }

    let insertOne = (cols, vals, cb) => {
        orm.create("burgers", cols, vals, function(res) {
          cb(res);
        });
      }

    let update = (objColVals, condition, cb) => {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }

    let deleteBurger = (condition, cb) => {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
      }

module.exports = {
    selectAll,
    insertOne,
    update,
    deleteBurger
}