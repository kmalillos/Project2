//  NEW SECTION 

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

$("#deletePetInfo").on("click", function(){
    // parents => helps to find tr
    // grabs attribute
var id = $(this).parents("tr").attr("data-id") // OR .data("id")
// alert(id);

$.ajax({
    method: "DELETE",
    url: `/api/petinfo/${id}`,
    // url: "/api/contacts/" + id;,
}).then(function(data) {
    console.log("Pet info Deleted", data);
    // location.href = "/petinfo";
    location = location;
})
;});

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

// NEW SECTION

$("#addHygiene").on("submit", function(event) {
    event.preventDefault();

    var newHygiene = {
        hygieneType: $("#hygieneType").val(),
        timeReceived: $("#timeReceived").val().trim(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({ 
        method: "POST",
        url: "/api/hygiene",
        data: newHygiene
    }).then(function(hygieneData) {
        console.log("New hygiene info added", newHygiene); 
        location.href = "/hygiene"; 
    })
});
