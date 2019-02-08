$(document).ready(function(){

    $(".agregar").on("click", function(event) {
        event.preventDefault();
       ​
        let id = $(this).data("fila");
       ​
         var editedUser = {
          id: id,
          servicio: $(`.fila-${id} .servicio`).text().trim(),
          costo: $(`.fila-${id} .costo`).text().trim(),
         };
       ​
        // send an AJAX to update
        
         $.ajax({
          method: "PUT",
          url: "/api/admin/servicios",
          data: editedUser
         }).then(function(data){
          alert("Updated data")
         });
       ​
       });

})