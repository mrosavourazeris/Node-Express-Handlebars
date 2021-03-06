const connection = require("./connection")

const orm = {
    selectAll: function (tableName){
        connection.query('SELECT * FROM ??', tableName, (err,data) => {
            if (err) throw err
            console.log(data)
        })
    },
    insertOne: function (table, colOne, colTwo, valOne, valTwo, cb) {
        connection.query('INSERT INTO ?? (??, ??) VALUES (?, ?);', [table, colOne, colTwo, valOne, valTwo], function (err, results) {
            if (err) throw err
            console.log(results)
            cb(results)
        })
    },
    updateOne: function() {
        connection.query('', (err,data) => {
            if (err) throw err
            console.log(data)
        })
    }
}



module.exports = orm;