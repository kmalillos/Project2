// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
// // doesn't work
// var express = require("express");
// var router = express.Router();

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


// models needs to export db
var db = require("../models");

var routesList = ["petinfo", "health", "activity", "diet", "potty", "hygiene"];

// // Routes
// // =============================================================

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    // app.get("/home", isAuthenticated, function (req, res) {
    app.get("/home", function (req, res) {

        // authentication here
        // if (req.user) {
        //     res.render("home");
        // } else {
        //     res.redirect("/")
        // }

        res.render("home");

    });

    // // handlebars info example
    // app.get("/info", function (req, res) {
    //     db.PetInfo.findAll({}).then(queryData) {
    //         res.render("section", {hbsObject: queryData})
    //     }
    // });

    app.get("/petinfo", function (req, res) {
        db.PetInfo.findAll({})
            .then(function (petInfoData) {
                res.render("section", {
                    petInfo: true,
                    data: petInfoData
                });
            })
    });

    app.get("/health", function (req, res) {
        res.render("section");
    });

    app.get("/activity", function (req, res) {
        db.ActivityTracker.findAll({})
            .then(function (activityTrackerData) {
                res.render("section", {
                    activityTracker: true,
                    data: activityTrackerData
                });
            })
    });

    app.get("/diet", function (req, res) {
        db.DietTracker.findAll({})
            .then(function (dietTrackerData) {
                res.render("section", {
                    dietTracker: true,
                    data: dietTrackerData
                });
            })
    });

    app.get("/potty", function (req, res) {
        db.PottyTracker.findAll({})
            .then(function (pottyTrackerData) {
                res.render("section", {
                    pottyTracker: true,
                    data: pottyTrackerData
                });
            })
    });

    app.get("/hygiene", function (req, res) {
        db.Hygiene.findAll({})
            .then(function (hygieneData) {
                res.render("section", {
                    hygiene: true,
                    data: hygieneData
                });
            })
    });

    // ADD-FORMS: need to think about simplifying
    // app.get("/:route/add", function (req, res) {
    //     if (routesList.includes(req.params.route)) {
    //         console.log("Yes! Section found!")
    //         return res.render("add-form");
    //     } else {
    //         console.log("No! Section not found.")
    //         res.end();
    //     }
    // });

    app.get("/petinfo/add", function (req, res) {
        return res.render("add-form", {petInfo: true});
    });

    app.get("/activity/add", function (req, res) {
        return res.render("add-form", {activityTracker: true});
    });

    app.get("/diet/add", function (req, res) {
        return res.render("add-form", {dietTracker: true});
    });

    app.get("/potty/add", function (req, res) {
        return res.render("add-form", {pottyTracker: true});
    });

    app.get("/hygiene/add", function (req, res) {
        return res.render("add-form", {hygiene: true});
    });

};