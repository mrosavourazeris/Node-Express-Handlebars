const orm = require('../config/orm.js')
//Kitchen/Chef

// console.log(orm)

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            // if (err) throw err
            cb(res)
        });
    },
    insertOne: function (valOne, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", valOne, false, function (res){
            // if (err) throw err
            cb(res)
        })
    },
    updateOne: function (valOne, valTwo, cb) {
        orm.updateOne("burgers", "devoured", valOne,"id", valTwo, function(res) {
            // if (err) throw err
            cb(res);
        })
    }
}


module.exports = burger;