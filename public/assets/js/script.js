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
