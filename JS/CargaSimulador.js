jQuery(function(){
  $("#ColapsarVentanaSimulador").click(function(){
    $("#CuerpoSimulador").toggle();
  });

  if (isMobile()){
    var insertarImagenResponsiva = "<center> <img src=\"PlanoCasa.png\" class=\"img-rounded img-responsive\" alt=\"Cinque Terre\" id=\"imagenPlano\"> </center>";
    $("#CuerpoSimulador").empty();
    $("#CuerpoSimulador").append(insertarImagenResponsiva);
  }
});

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
}

if (isMobile()){
  var gameInstance = UnityLoader.instantiate("gameContainer", "Build/SimuladorCasa_01.json", {onProgress: UnityProgress});
}