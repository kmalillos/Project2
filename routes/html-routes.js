// DEPENDENCIES
// =============================================================

// --- Require sequelize in Models directory
var db = require("../models");

// -- FOR AUTHENTICATION
// -- Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// var routesList = ["petinfo", "health", "activity", "diet", "potty", "hygiene"];

// ROUTES
// =============================================================

// EXPORTED TO SERVER.JS
module.exports = function (app) {

    // LOGIN + HOME + AUTHENICATION
    // =============================================================

    // app.get("/", function (req, res) {
    //     res.render("index");
    // });

    // app.get("/signup", function (req, res) {
    //     res.render("signup");
    // });

    // // app.get("/home", isAuthenticated, function (req, res) {
    // app.get("/home", function (req, res) {

    //     // authentication here
    //     // if (req.user) {
    //     //     res.render("home");
    //     // } else {
    //     //     res.redirect("/")
    //     // }

    //     res.render("home");
    // });

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            //   res.redirect("/members");
            // res.render("members", {user: req.user});
            // res.render("members");
            res.render("home");
        }
        // res.sendFile(path.join(__dirname, "../public/signup.html"));
        res.render("signup");
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            //   res.redirect("/members");
            // res.render("members");
            res.render("home");
        }
        // res.sendFile(path.join(__dirname, "../public/login.html"));
        res.render("login");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, function (req, res) {
    //     // res.sendFile(path.join(__dirname, "../public/members.html"));
    //     res.render("members");
    // });
    app.get("/home", isAuthenticated, function (req, res) {
        // res.sendFile(path.join(__dirname, "../public/members.html"));
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

    // ADD FORMS
    // =============================================================

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
        return res.render("add-form", { petInfo: true });
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