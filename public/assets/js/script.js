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
        console.log("New petInfo added", newPetInfo); //contact = API data?? or NewContact
        location.href = "/petinfo"; //takes you to homepage 
    })
});