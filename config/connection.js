// connection.js 

// Set up MySQL for connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dmc2SQL!",
    database: "burgers_db"
});

// Make connection
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;
