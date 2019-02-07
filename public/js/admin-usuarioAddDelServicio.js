$(document).ready(function () {

    var userSelect = $("#user");

    // Getting the authors, and their posts
    getUsuarios();

    // A function to get Authors and then render our list of Authors
    function getUsuarios() {
        $.get("/api/user/usuarios", renderUserList);
    }
    // Function to either render a list of authors, or if there are none, direct the user to the page
    // to create an author first
    function renderUserList(data) {
        if (!data.length) {
            window.location.href = "/user/usuarios";
        }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
        }
        userSelect.empty();
        console.log(rowsToAdd);
        console.log(userSelect);
        userSelect.append(rowsToAdd);
        // userSelect.val(authorId);
    }

    // Creates the author options in the dropdown
    function createUserRow(author) {
        var listOption = $("<option>");
        listOption.attr("value", Usuarios.id);
        listOption.text(Usuarios.name);
        return listOption;
    }



});
