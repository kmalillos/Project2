// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();

// Routes
// =============================================================

router.get("/", function (req, res) {
    // res.send("Hello");
    res.render("index");
});

// required in server.js
module.exports = router;