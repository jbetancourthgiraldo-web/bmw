<?php

$cliente = $_POST['cliente'];
$venta = $_POST['venta'];
$metodo_pago = $_POST['metodo_pago'];
$valor = $_POST['valor'];
$fecha = $_POST['fecha'];

$sql = "INSERT INTO pago(
            cliente,
            venta,
            metodo_pago,
            valor,
            fecha
        )
        VALUES (
            '$cliente',
            '$venta',
            '$metodo_pago',
            '$valor',
            '$fecha'
        )";

if ($conn->query($sql) === TRUE) {
    echo "Registro guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>