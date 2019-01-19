// DEPENDENCIES
// =============================================================================
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
    // Serve static content for the app from the "public" directory in the application directory.
    app.use(express.static("public"));
    // Parse application body
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

var exphbs = require("express-handlebars"); 
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

// ROUTING
// =============================================================================
// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);

// // commented out because giving middleware errors -KM
// var routes = require("./routes/api-routes");
// var routes = require("./routes/html-routes");
// app.use(routes);

// LISTENER
// =============================================================================
app.listen(PORT, function () {
    console.log("Server listening on http://localhost:" + PORT);
});