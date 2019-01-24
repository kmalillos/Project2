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
    res.render("index");
});

router.get("/home", function (req, res) {
    res.render("home");
});

router.get("/:section", function (req, res) {
    res.render("section");
});

router.get("/:section/form", function (req, res) {
    res.render("form");
});

// required in server.js
module.exports = router;