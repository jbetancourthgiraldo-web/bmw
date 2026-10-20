<?php

$cliente = $_POST['cliente'];
$vendedor = $_POST['vendedor'];
$vehiculo = $_POST['vehiculo'];
$fecha = $_POST['fecha'];
$total = $_POST['total'];

$sql = "INSERT INTO ventas(
            cliente,
            vendedor,
            vehiculo,
            fecha,
            total
        )
        VALUES (
            '$cliente',
            '$vendedor',
            '$vehiculo',
            '$fecha',
            '$total'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>