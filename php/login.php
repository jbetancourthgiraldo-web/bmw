<?php

require("conexion.php");
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$contrasena'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
       
        echo "Inicio de sesión exitoso.";
        $_SESSION['usuario'] = $usuario;

        
    } else {
       
        echo "Usuario o contraseña incorrectos.";
    }
}
?>