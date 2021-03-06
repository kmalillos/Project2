//  NEW SECTION 

$("#addPetInfo").on("submit", function (event) {
    event.preventDefault();

    var newPetInfo = {
        petName: $("#petName").val().trim(),
        breed: $("#breed").val().trim(),
        weight: $("#weight").val(),
        age: $("#age").val().trim(),
    }

    $.ajax({
        method: "POST",
        url: "/api/petinfo",
        data: newPetInfo
    }).then(function (petInfoData) {
        console.log("New petInfo added", newPetInfo);
        location.href = "/petinfo";
    })
});

$(".deletePetInfo").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/petinfo/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});

//  NEW SECTION 

$("#addVet").on("submit", function (event) {
    event.preventDefault();

    var newVet = {
        hospital: $("#hospital").val().trim(),
        vetName: $("#vetName").val().trim(),
        phoneNumber: $("#phoneNumber").val(),
        address: $("#address").val().trim(),
    }
    $.ajax({
        method: "POST",
        url: "/api/vet",
        data: newVet
    }).then(function (data) {
        console.log("New vet info added", data);
        location.href = "/vet";
    })
});

$(".deleteVet").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/vet/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});


//  NEW SECTION 

$("#addVaccine").on("submit", function (event) {
    event.preventDefault();

    var newVaccine = {
        vaccineName: $("#vaccineName").val(),
        vaccineDate: $("#vaccineDate").val(),
        expires: $("#expires").val()
    }

    $.ajax({
        method: "POST",
        url: "/api/vaccines",
        data: newVaccine
    }).then(function (data) {
        console.log("New vaccine added", data);
        location.href = "/vaccines";
    })
});

$(".deleteVaccine").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/vaccines/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});


//  NEW SECTION 

$("#addActivity").on("submit", function (event) {
    event.preventDefault();

    var newActivity = {
        activityType: $("#activityType").val(),
        startOrStop: $("#startOrStop").val(),
        // startTime: $("#startTime").val().trim(),
        // endTime: $("#endTime").val(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({
        method: "POST",
        url: "/api/activity",
        data: newActivity
    }).then(function (data) {
        console.log("New activity added", data);
        location.href = "/activity";
    })
});

$(".deleteActivity").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/activity/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});


// NEW SECTION

$("#addDiet").on("submit", function (event) {
    event.preventDefault();

    var newDiet = {
        mealType: $("#mealType").val(),
        // mealTime: $("#mealTime").val().trim(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({
        method: "POST",
        url: "/api/diet",
        data: newDiet
    }).then(function (dietData) {
        console.log("New diet added", newDiet);
        location.href = "/diet";
    })
});

$(".deleteDiet").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/diet/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});


// NEW SECTION

$("#addPotty").on("submit", function (event) {
    event.preventDefault();

    var newPotty = {
        pottyType: $("#pottyType").val(),
        // pottyTime: $("#pottyTime").val().trim(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({
        method: "POST",
        url: "/api/potty",
        data: newPotty
    }).then(function (dietData) {
        console.log("New potty info added", newPotty);
        location.href = "/potty";
    })
});

$(".deletePotty").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/potty/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});


// NEW SECTION

$("#addHygiene").on("submit", function (event) {
    event.preventDefault();

    var newHygiene = {
        hygieneType: $("#hygieneType").val(),
        // timeReceived: $("#timeReceived").val().trim(),
        notes: $("#notes").val().trim(),
    }

    $.ajax({
        method: "POST",
        url: "/api/hygiene",
        data: newHygiene
    }).then(function (hygieneData) {
        console.log("New hygiene info added", newHygiene);
        location.href = "/hygiene";
    })
});

$(".deleteHygiene").on("click", function () {
    // parents => helps to find tr and grabs attribute
    var id = $(this).parents("tr").attr("data-id");

    $.ajax({
        method: "DELETE",
        url: `/api/hygiene/${id}`
    }).then(function (data) {
        console.log("Data Deleted", data);
        location = location;
    })
});
