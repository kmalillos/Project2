$("#addPetInfo").on("submit", function(event) {
    event.preventDefault();

    var newPetInfo = {
        petName: $("#petName").val().trim(),
        breed:$("#breed").val().trim(),
        weight: $("#weight").val(),
        age: $("#age").val().trim(),
    }

    $.ajax({ 
        method: "POST",
        url: "/api/petinfo",
        data: newPetInfo
    }).then(function(petInfoData) {
        console.log("New petInfo added", newPetInfo); 
        location.href = "/petinfo"; 
    })
});

//  NEW SECTION 

$("#addActivity").on("submit", function(event) {
    event.preventDefault();

    var newActivity = {
        activityType: $("#activityType").val(),
        startTime:$("#startTime").val().trim(),
        endTime: $("#endTime").val(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({ 
        method: "POST",
        url: "/api/activity",
        data: newActivity
    }).then(function(activityData) {
        console.log("New activity added", newActivity); 
        location.href = "/activity"; 
    })
});

// NEW SECTION

$("#addDiet").on("submit", function(event) {
    event.preventDefault();

    var newDiet = {
        mealType: $("#mealType").val(),
        mealTime:$("#mealTime").val().trim(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({ 
        method: "POST",
        url: "/api/diet",
        data: newDiet
    }).then(function(dietData) {
        console.log("New diet added", newDiet); 
        location.href = "/diet"; 
    })
});


// NEW SECTION

$("#addPotty").on("submit", function(event) {
    event.preventDefault();

    var newPotty = {
        pottyType: $("#pottyType").val(),
        pottyTime:$("#pottyTime").val().trim(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({ 
        method: "POST",
        url: "/api/potty",
        data: newPotty
    }).then(function(dietData) {
        console.log("New potty info added", newPotty); 
        location.href = "/potty"; 
    })
});