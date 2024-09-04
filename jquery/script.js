$(document).ready(function(){
    // hide() y show()
    $("#hide").click(function(){
        $("p").hide();
    });

    $("#show").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
    $(".btn-informacion").click(function(){
        const raza = $(this).data("raza");
        $(".info-raza").slideUp();  // Oculta todas las secciones primero
        $("#info-" + raza).slideDown();  // Muestra solo la información de la raza seleccionada
    });
});
