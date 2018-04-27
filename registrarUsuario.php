<!DOCTYPE html>
<html>
<head>
	<title>No deberias estar viendo esta pagina: Grupo Neko</title>
</head>
<body>
	<?php

		$correo = $_POST["email"];
		$clave = $_POST["pwd"];

		if (!isset($correo)){
			header('Location: index.html');
		}

		$mysqli = new mysqli('localhost', 'root', '', 'gruponeko');
        if(!$mysqli){
            echo "No se pudo realizar la conexión PHP - MySQL"; 
        }
        else{
                          
            $sql = "insert into usuarios (Correo, Clave) values('$correo', '$clave')";
            echo $sql;
            $resultado = $mysqli->query($sql);
            $mysqli->close();
            header('Location: index.html');                
           	
        }

	?>

</body>
</html>