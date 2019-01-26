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

    


};
