// DEPENDENCIES
// =============================================================================

// --- access to everything sequelize. lives in index.js ---
var db = require("../models");


// ROUTING
// =============================================================================

// EXPORTED TO SERVER.JS
module.exports = function(app) {

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
        })
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
    app.get("/api/petinfo", function(req, res) {
        db.VetInfo.findAll({})
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
        db.VetInfo.create({
            hospital: req.body.hospital,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
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
};
