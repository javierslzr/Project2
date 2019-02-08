$(document).ready(function () {

    var servicioSelect = $("#servicio");

    // Getting the authors, and their posts
    getServicios();

    // A function to get Users and then render our list of Authors
    function getServicios() {
        $.get("/api/usuario/servicios", renderServiciosList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderServiciosList(data) {
        // if (!data.length) {
        //     window.location.href = "/user/usuarios";
        // }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createServicioRow(data[i]));
        }
        servicioSelect.empty();
        
        // console.log(userSelect);
        servicioSelect.append(rowsToAdd);
        // userSelect.val(authorId);

        var users = data;
        console.log(users);

    }

    // Creates the user options in the dropdown
    function createServicioRow(servicio) {
        var listOption = $("<option>");
        listOption.attr("value", servicio.id);
        listOption.text(servicio.servicio);
        return listOption;
    }

    //Para agregar un servicio al usuario
    $(".agregar").on("click", function(event) {
        event.preventDefault();
      
        let id = $(this).data("fila");
      
          var editedUser = {
            id: id,
            servicio: $(`.fila-${id} .servicio`).text().trim(),
            costo: $(`.fila-${id} .costo`).text().trim(),
          };
      
        // send an AJAX to update
          $.ajax({
            method: "PUT",
            // url: "/api/admin/servicios",
            data: editedUser
          }).then(function(data){
            alert("Updated data")
            location.reload();
          });
      
      });
      
      //Para eliminar un servicio al usuario
      $(".delete").on("click", function(event) {
        event.preventDefault();
      
        let id = $(this).data("fila");
        debugger;
          var deletedServicio = {
            id: id,
          };
      
        // send an AJAX to DELETE
          $.ajax({
            method: "DELETE",
            // url: "/api/admin/servicios",
            data: deletedServicio
          }).then(function(data){
            alert("Deleted data")
            location.reload();
          });
      
      });


    //Ubicacion
    var ubicacionSelect = $("#ubicacion");

    // Getting the authors, and their posts
    getUbicaciones();

    // A function to get Users and then render our list of Authors
    function getUbicaciones() {
        $.get("/api/usuario/ubicaciones", renderUbicacionList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderUbicacionList(data) {
        // if (!data.length) {
        //     window.location.href = "/user/usuarios";
        // }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUbicacionRow(data[i]));
        }
        ubicacionSelect.empty();
        
        // console.log(userSelect);
        ubicacionSelect.append(rowsToAdd);
        // userSelect.val(authorId);

        var users = data;
        console.log(users);

    }

    // Creates the user options in the dropdown
    function createUbicacionRow(ubicacion) {
        var listOption = $("<option>");
        listOption.attr("value", ubicacion.id);
        listOption.text(ubicacion.nombre);
        return listOption;
    }

    //Para agregar un servicio al usuario
    $(".agregar").on("click", function(event) {
        event.preventDefault();
      
        let id = $(this).data("fila");
      
          var editedUser = {
            id: id,
            servicio: $(`.fila-${id} .servicio`).text().trim(),
            costo: $(`.fila-${id} .costo`).text().trim(),
          };
      
        // send an AJAX to update
          $.ajax({
            method: "PUT",
            // url: "/api/admin/servicios",
            data: editedUser
          }).then(function(data){
            alert("Updated data")
            location.reload();
          });
      
      });
      
      //Para eliminar un servicio al usuario
      $(".delete").on("click", function(event) {
        event.preventDefault();
      
        let id = $(this).data("fila");
        debugger;
          var deletedServicio = {
            id: id,
          };
      
        // send an AJAX to DELETE
          $.ajax({
            method: "DELETE",
            // url: "/api/admin/servicios",
            data: deletedServicio
          }).then(function(data){
            alert("Deleted data")
            location.reload();
          });
      
      });


});
