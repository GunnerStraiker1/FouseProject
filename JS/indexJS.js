function validarClave (formulario){
	var claveFormulario = formulario.pwd.value + "";
	if (parseInt(claveFormulario.length) >= 6 && parseInt(claveFormulario.length) <= 16){
		return true;
	}	else	{
		return false;
	}
}

function validarRegistro(formulario){
	var primeraClave = formulario.pwd.value + "";
	var segundaClave = formulario.pwd2.value + "";


	if ((parseInt(primeraClave.length) >= 6 && parseInt(primeraClave.length) <= 16) && (parseInt(segundaClave.length) >= 6 && parseInt(segundaClave.length) <= 16)){
		return true;
	}	else	{
		return false;
	}
}
		