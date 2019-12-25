// orm.js

//  Set up connection for ORM
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// The ?? signs swap out table or column names
// The ? signs swap out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, 
            [tableInput, colToSearch, valOfCol],
            (err, res) => {
                if (err)
                    throw err;
                console.log(res);
            });
    },
    selectAndOrder: function (whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, 
            [whatToSelect, table, orderCol],
            (err, res) => {
                if (err)
                    throw err;
                console.log(res);
            });
    },
    findWhoHasMost: function (tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        connection.query(queryString,
            [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            (err, res) => {
                if (err)
                    throw err;
                console.log(res);
            }
        );
    }
};

// Export ORM for server.js to use
module.exports = orm;
