const connection = require("./connection")

const orm = {
    selectAll: function (tableName){
        connection.query('SELECT * FROM ??', tableName, (err,data) => {
            if (err) throw err
            console.log(data)
        })
    },
    insertOne: function () {
        connection.query('', (err, data) => {
            if (err) throw err
            console.log(data)
        })
    },
    updateOne: function() {
        connection.query('', (err,data) => {
            if (err) throw err
            console.log(data)
        })
    }
}