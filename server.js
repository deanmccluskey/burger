// server.js
// Burger App -- HW14 - Node/Express/Handlebars App
// Copyright 2019 Dean McCluskey

// Set up Express for application
var express = require("express");

// Set up port of app, process.env.PORT lets port be set by Heroku
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for app from "public" directory in the app directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set up Express Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give server access to them
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// Start server to listen to client requests
app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
