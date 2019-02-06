// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#submit").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newService = {
      // name from name input
      servicio: $("#servicio").val().trim(),
      // points from force-points input
      costo: $("#costo").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/admin/servicios", newService)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Agregando Servicio...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#servicio").val("");
    $("#costo").val(""); 
});

$("#edit").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var updateService = {
    // name from name input
    servicio: $("#servicio").text().trim(),
    // points from force-points input
    costo: $("#costo").text().trim()
  };

  // send an AJAX to update
  
    $.ajax({
      method: "PUT",
      url: "/api/admin/servicios",
      data: updateService
    }).then(function(data){
      alert("Updated data")
    });
  
  

  
});
