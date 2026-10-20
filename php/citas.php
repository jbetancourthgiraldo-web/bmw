<?php

$nombre = $_POST['nombre'];
$documento = $_POST['documento'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$direccion = $_POST['direccion'];

$sql = "INSERT INTO clientes(
            nombre,
            documento,
            telefono,
            email,
            direccion
        )
        VALUES (
            '$nombre',
            '$documento',
            '$telefono',
            '$email',
            '$direccion'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>