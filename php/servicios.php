<?php

$nombre_servicio = $_POST['nombre_servicio'];
$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];

$sql = "INSERT INTO servicios(
            nombre_servicio,
            descripcion,
            precio
        )
        VALUES (
            '$nombre_servicio',
            '$descripcion',
            '$precio'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
