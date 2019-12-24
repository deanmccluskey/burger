// burger -- HW14 - Node Express Handlebars App


// Required packages
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// Create Express app
var app = express();

// Set port of application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configuire DB connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dmc2SQL!",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Root get route.
app.get("/", (req, res) => {
    connection.query("SELECT * FROM burgers;", (err, data) => {
        if (err) {
            throw err;
        }
        // Test it.
        // console.log('The solution is: ', data);
        // Test it.
        // res.send(data);
        res.render("index", { burgers: data });
    });
});








// Post route -> back to home
app.post("/", (req, res) => {
    // Test it.
    // console.log('You sent, ' + req.body.wish);

    // Test it.
    // res.send('You sent, ' + req.body.wish)

    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger],
        (err, result) => {
            if (err) {
                throw err;
            }
            res.redirect("/");
        });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
