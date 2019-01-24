// DEPENDENCIES
// =============================================================================

// // LOAD DATA HERE (EXAMPLE ONLY BELOW)
// var activities = require("../data/activities");


// ROUTING
// =============================================================================

// EXPORTED TO SERVER.JS
module.exports = function(app) {

    app.get("/api/:section", function (req, res) {
        
        // res.json(activities);
    });

    app.post("/api/activities", function (req, res) {
        // console.log(req.body);
        // res.end();
    });
};
