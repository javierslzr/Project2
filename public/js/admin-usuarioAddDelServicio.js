$(document).ready(function () {

    var userSelect = $("#user");

    // Getting the authors, and their posts
    getUsuarios();

    // A function to get Users and then render our list of Authors
    function getUsuarios() {
        $.get("/api/admin/usuarios", renderUserList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderUserList(data) {
        // if (!data.length) {
        //     window.location.href = "/user/usuarios";
        // }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
        }
        userSelect.empty();
        
        // console.log(userSelect);
        userSelect.append(rowsToAdd);
        // userSelect.val(authorId);

        var users = data;
        console.log(users);

    }

    // Creates the user options in the dropdown
    function createUserRow(user) {
        var listOption = $("<option>");
        listOption.attr("value", user.id);
        listOption.text(user.name);
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
        $.get("/api/admin/ubicacion", renderUbicacionList);
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
