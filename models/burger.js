const orm = require('../config/orm.js')

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    insertOne: function (valOne, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", valOne, false, function (res){
            cb(res)
        })
    },
    updateOne: function (valOne, valTwo, cb) {
        orm.updateOne("burgers", "devoured", valOne,"id", valTwo, function(res) {
            cb(res);
        })
    }
}


module.exports = burger;