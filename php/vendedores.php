<?php

$nombre = $_POST['nombre'];
$documento = $_POST['documento'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];

$sql = "INSERT INTO vendedores(
            nombre,
            documento,
            telefono,
            email
        )
        VALUES (
            '$nombre',
            '$documento',
            '$telefono',
            '$email'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>