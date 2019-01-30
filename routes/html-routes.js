// DEPENDENCIES
// =============================================================

// --- Require sequelize in Models directory
var db = require("../models");

// -- FOR AUTHENTICATION
// -- Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// ROUTES
// =============================================================

// EXPORTED TO SERVER.JS
module.exports = function (app) {

    // LOGIN + HOME + AUTHENICATION
    // =============================================================

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render("home");
        }
        res.render("login");
        // if (req.user) {
        //     res.render("home");
        // } else {
        //     res.render("login");
        // }
    });

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render("home");
        }
        res.render("login");
        // if (req.user) {
        //     res.render("home");
        // } else {
        //     res.render("login");
        // }
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/home", isAuthenticated, function (req, res) {
        res.render("home");
    });

    // SECTIONS
    // =============================================================

    app.get("/petinfo", function (req, res) {
        db.PetInfo.findAll({})
            .then(function (petInfoData) {
                res.render("section", {
                    petInfo: true,
                    data: petInfoData
                });
            })
    });

    app.get("/vet", function (req, res) {
        db.VetInfo.findAll({})
            .then(function (vetInfoData) {
                res.render("section", {
                    vet: true,
                    data: vetInfoData
                });
            })
    });

    app.get("/vaccines", function (req, res) {
        db.Vaccinations.findAll({})
            .then(function (vaccineData) {
                res.render("section", {
                    vaccinations: true,
                    data: vaccineData
                });
            })
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

    app.get("/favorites", function (req, res) {
        res.render("section", {
            favorites: true
        })
    });

    app.get("/resources", function (req, res) {
        res.render("resources")
    });

    // ADD FORMS
    // =============================================================

    app.get("/petinfo/add", function (req, res) {
        return res.render("add-form", { petInfo: true });
    });

    app.get("/vet/add", function (req, res) {
        return res.render("add-form", { vet: true });
    });

    app.get("/vaccines/add", function (req, res) {
        return res.render("add-form", { vaccinations: true });
    });

    app.get("/activity/add", function (req, res) {
        return res.render("add-form", { activityTracker: true });
    });

    app.get("/diet/add", function (req, res) {
        return res.render("add-form", { dietTracker: true });
    });

    app.get("/potty/add", function (req, res) {
        return res.render("add-form", { pottyTracker: true });
    });

    app.get("/hygiene/add", function (req, res) {
        return res.render("add-form", { hygiene: true });
    });

};