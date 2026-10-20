<?php

$catalogo = $_POST['catalogo'];
$modelo = $_POST['modelo'];
$anio = $_POST['anio'];
$precio = $_POST['precio'];
$color = $_POST['color'];

$sql = "INSERT INTO catalogo(
            catalogo,
            modelo,
            anio,
            precio,
            color
        )
        VALUES (
            '$catalogo',
            '$modelo',
            '$anio',
            '$precio',
            '$color'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>