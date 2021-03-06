const orm = require('../config/orm.js')
//Kitchen/Chef

console.log(orm)

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
    }
}


module.exports = burger;