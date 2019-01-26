// DEPENDENCIES
// =============================================================================
var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

// Requiring our Models directory for syncing
var db = require("./models");

// Sets up the Express App
var app = express();
// Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Sets up BodyParser
var bodyParser = require("body-parser");
// Sets up the Express app to handle data parsing (needed for posts and puts)
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up Handlebars
var exphbs = require("express-handlebars"); 
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

// ROUTING
// =============================================================================
// not working
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// var routesAPI = require("./routes/api-routes");
// app.use(routesAPI);

var routesHTML = require("./routes/html-routes");
app.use(routesHTML);

// LISTENER
// =============================================================================

// ***REMOVE {FORCE: TRUE} AFTER TESTING!
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on http://localhost:" + PORT);
    });
  });