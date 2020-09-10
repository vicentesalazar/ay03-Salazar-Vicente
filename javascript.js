$(document).ready(function(){
    $("#boton").click(function(){
        $("#titulo").text("MESSI NO SE VA");
    });
    $("#bajada").mouseenter(function(){
        $("#bajada").css("background-color","red");
    });
    $("#bajada").mouseleave(function(){
        $("#bajada").css("background-color","white");
    });
    var escondido = false;
    $("#chaosuarez").click(function(){
        if (escondido == true) {
            escondido = false;
            $("#mys").show();
        }
        else {
            escondido = true;
            $("#mys").hide();
        }
    });
});