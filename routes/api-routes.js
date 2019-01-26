// DEPENDENCIES
// =============================================================================

// --- access to everything sequelize. lives in index.js ---
var db = require("../models");
var passport = require("../config/passport");



// ROUTING
// =============================================================================

// EXPORTED TO SERVER.JS
module.exports = function(app) {

// Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });



    
    // this route should find all petinfo in the table and display them as JSON
    app.get("/api/petinfo", function(req, res) {
        db.PetInfo.findAll({})
        .then(function(petData) {
            res.json(petData);
        })
        .catch(function(err) {
            console.log(err);
            res.json(err)
        })
    });

    // this route should add a new petInfo to the table
	app.post("/api/petinfo", function(req, res) {
        db.PetInfo.create({
            petName: req.body.petName,
            breed: req.body.breed,
            weight: req.body.weight,
            age: req.body.age
        })
        .then(function(petinfoCreatedData) {
            // .dataValues = specifies what data to console.log
            console.log("New pet info created", petinfoCreatedData.dataValues);
            res.json(petinfoCreatedData);
        })
        .catch(function(err) {
            console.log(err);
            res.json(err)
        })
    
    });

    // // to test POST in Postman
    // {
    //     "pet_name": "Lola",
    //     "breed": "Airedoodle",
    //     "weight": "26",
    //     "age": "1"
    // }

    // // ** WORK ON DELETE LATER
    // // this route should delete a contact from the table, if the id matches the ':id' url param
	// app.delete("/api/petinfo/:id", function(req, res) {
    //     db.Contact.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //     .then(function(petInfoDeleted) {
    //         // .dataValues = specifies what data to console.log
    //         console.log("Delected pet info", petInfoDeleted.dataValues)
    //         res.json(petInfoDeleted);
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //         res.json(err)
    //     })
    // });

    
    app.get("/api/vetinfo", function(req, res) {
        db.VetInfo.findAll({})
        .then(function(vetData) {
            res.json(vetData);
        })
        .catch(function(err) {
            console.log(err);
            res.json(err)
        })
    });

    // this route should add a new petInfo to the table
	app.post("/api/vetinfo", function(req, res) {
        db.VetInfo.create({
            hospital: req.body.hospital,
            vetName: req.body.vetName,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        })
        .then(function(vetinfoCreatedData) {
            // .dataValues = specifies what data to console.log
            console.log("New vet info created", vetinfoCreatedData.dataValues);
            res.json(vetinfoCreatedData);
        })
        .catch(function(err) {
            console.log(err);
            res.json(err)
        });
        app.get("/api/vaccinations", function(req, res) {
            db.Vaccinations.findAll({})
            .then(function(vaccinationsData) {
                res.json(vaccinationsData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
    
        // this route should add a new petInfo to the table
        app.post("/api/vaccinations", function(req, res) {
            db.Vaccinations.create({
                vaccines: req.body.vaccines,
                vaccineDate: req.body.vaccineDate,
                expires: req.body.expires
            })
            .then(function(vaccinationsCreatedData) {
                // .dataValues = specifies what data to console.log
                console.log("New vaccination info created", vaccinationsCreatedData.dataValues);
                res.json(vaccinationsCreatedData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
        app.get("/api/activitytracker", function(req, res) {
            db.ActivityTracker.findAll({})
            .then(function(activityData) {
                res.json(activityData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
    
        // this route should add a new petInfo to the table
        app.post("/api/activitytracker", function(req, res) {
            db.ActivityTracker.create({
                activityMethod: req.body.activityMethod,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                notes: req.body.notes
            })
            .then(function(activitytrackerCreatedData) {
                // .dataValues = specifies what data to console.log
                console.log("New activity info created", activitytrackerCreatedData.dataValues);
                res.json(activitytrackerCreatedData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
        app.get("/api/hygiene", function(req, res) {
            db.hygiene.findAll({})
            .then(function(hygieneData) {
                res.json(hygieneData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
    
        // this route should add a new petInfo to the table
        app.post("/api/hygiene", function(req, res) {
            db.hygiene.create({
                hygieneType: req.body.hygieneType,
                timeReceived: req.body.breed,
                notes: req.body.notes
            })
            .then(function(hygieneCreatedData) {
                // .dataValues = specifies what data to console.log
                console.log("New hygiene info created", hygieneCreatedData.dataValues);
                res.json(hygieneCreatedData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
        app.get("/api/toliettracker", function(req, res) {
            db.tolietTracker.findAll({})
            .then(function(toliettrackerData) {
                res.json(toliettrackerData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
    
        // this route should add a new petInfo to the table
        app.post("/api/toliettracker", function(req, res) {
            db.tolietTracker.create({
                bathroomType: req.body.bathroomType,
                bathroomTime: req.body.bathroomTime,
                notes: req.body.notes
            })
            .then(function(toliettrackerCreatedData) {
                // .dataValues = specifies what data to console.log
                console.log("New bathroom info created", toliettrackerCreatedData.dataValues);
                res.json(toliettrackerCreatedData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
        
        app.get("/api/diettracker", function(req, res) {
            db.DietTracker.findAll({})
            .then(function(dietData) {
                res.json(dietData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
    
        // this route should add a new petInfo to the table
        app.post("/api/diettracker", function(req, res) {
            db.DietTracker.create({
                dietType: req.body.dietType,
                mealTime: req.body.mealTime,
                notes: req.body.notes
            })
            .then(function(diettrackerCreatedData) {
                // .dataValues = specifies what data to console.log
                console.log("New diet info created", diettrackerCreatedData.dataValues);
                res.json(diettrackerCreatedData);
            })
            .catch(function(err) {
                console.log(err);
                res.json(err)
            })
        });
    });
    
    
   
    
};
