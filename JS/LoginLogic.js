jQuery(function(){
    $("#BotonRegistrar").click(function(){
    	var primeraClave = $("#pwd").val();
    	var segundaClave = $("#pwd2").val();
    	var primerCorreo = $("#email").val();
    	var segundoCorreo = $("#email2").val();
    	console.log(primeraClave.localeCompare(segundaClave));
    	console.log(primerCorreo.localeCompare(segundoCorreo));
    	if ((primeraClave.localeCompare(segundaClave)) == 0){
    		$("#AlertaClave").hide();
    		$("#AlertaClave2").hide();
    	} else {
    		$("#AlertaClave").show();
    		$("#AlertaClave2").show();
    	}

    	if ((primerCorreo.localeCompare(segundoCorreo)) == 0){
    		$("#AlertaCorreo").hide()
    		$("#AlertaCorreo2").hide();
    	}	else	{
    		$("#AlertaCorreo").show();
        	$("#AlertaCorreo2").show();
    	}
    });
    $("#BotonNav").click(function(){
    	$("#AlertaClave").hide();
        $("#AlertaCorreo").hide();
        $("#AlertaClave2").hide();
        $("#AlertaCorreo2").hide();
        $("#AlertaClave3").hide();
    });

    $("#BotonNav2").click(function(){
    	$("#AlertaClave").hide();
        $("#AlertaCorreo").hide();
        $("#AlertaClave2").hide();
        $("#AlertaCorreo2").hide();
        $("#AlertaClave3").hide();
    });

    $("#BotonIngresar").click(function(){
    	var unicaClave = $("#pwd3").val();
    	if (unicaClave.length >= 6 && unicaClave <= 16){
    		$("#AlertaClave3").hide();
    	}	else	{
    		$("#AlertaClave3").show();
    	}
    });
});