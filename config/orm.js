const connection = require("./connection")

const orm = {
    selectAll: function (tableName, cb){
        connection.query('SELECT * FROM ??', tableName, function (err,result) {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: function (table, colOne, colTwo, valOne, valTwo, cb) {
        connection.query('INSERT INTO ?? (??, ??) VALUES (?, ?);', [table, colOne, colTwo, valOne, valTwo], function (err, results) {
            if (err) throw err
            cb(results)
        })
    },
    updateOne: function(table, colOne, valOne, colTwo, valTwo, cb) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?;', [table, colOne, valOne, colTwo, valTwo], function (err, results) {
            if (err) throw err
            cb(results)
        })
    }
}



module.exports = orm;