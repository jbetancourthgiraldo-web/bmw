<?php

$nombre_marca = $_POST['nombre_marca'];
$descripcion = $_POST['descripcion'];

$sql = "INSERT INTO marca(
            nombre_marca,
            descripcion
        )
        VALUES (
            '$nombre_marca',
            '$descripcion'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>