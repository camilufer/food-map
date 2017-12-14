$(document).ready(function(){
 /**
  * Muestra la imagen del restaurant seleccionado 
  */
$("select").change(function(){
    $("#containerImg").children().remove();
    var selection = $("select").val();
    for (var i = 0; i < restaurantes.length; i++) {
      for(var j = 0; j < restaurantes[j].filters.length; j++) {
        if (restaurantes[i].filters[j] == selection) {
          var foto = restaurantes[i].photo;
          $("#containerImg").append("<div class='container'><div class='contenedor-img img-responsive'>"+restaurantes[i].name+"</p>"+foto+"</div></div>");
        }
      }
    }

  });

   
});