// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();

// models needs to export db
// var db = require("../models");

var routesList = ["info","health", "activity", "diet","potty","hygiene"];

// Routes
// =============================================================

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/home", function (req, res) {
    res.render("home");
});

// // handlebars info example
// router.get("/info", function (req, res) {
//     db.PetInfo.findAll({}).then(queryData) {
//         res.render("section", {hbsObject: queryData})
//     }
// });

router.get("/info", function (req, res) {
    res.render("section");
});

router.get("/health", function (req, res) {
    res.render("section");
});

router.get("/activity", function (req, res) {
    res.render("section");
});

router.get("/diet", function (req, res) {
    res.render("section");
});

router.get("/potty", function (req, res) {
    res.render("section");
});

router.get("/hygiene", function (req, res) {
    res.render("section");
});

// need to think about the forms...
router.get("/:route/add", function (req, res) {

    if (routesList.includes(req.params.route)) {
        
        console.log("Yes! Section found!")

        return res.render("add-form");

    } else {
        console.log("No! Section not found.")
        res.end();
    }

});

// required in server.js
module.exports = router;