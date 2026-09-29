function ValidarInformacion() {

    let cliente_venta = document.getElementById("cliente_venta").value.trim();
    let vehiculo_venta = document.getElementById("vehiculo_venta").value.trim();
    let vendedor_venta = document.getElementById("vendedor_venta").value.trim();
    let precio_venta = document.getElementById("precio_venta").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value.trim();
    let fecha_venta = document.getElementById("fecha_venta").value.trim();
    let observaciones_venta = document.getElementById("observaciones_venta").value.trim();

    if (
        cliente_venta === "" ||
        vehiculo_venta === "" ||
        vendedor_venta === "" ||
        precio_venta === "" ||
        metodo_pago === "" ||
        fecha_venta === "" ||
        observaciones_venta === ""
    ) {

        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Campos incompletos",
            showConfirmButton: false,
            timer: 1500
        });

        return;
    }

    console.log("Información de la Venta");
    console.log("Cliente:", cliente_venta);
    console.log("Vehículo:", vehiculo_venta);
    console.log("Vendedor:", vendedor_venta);
    console.log("Precio:", precio_venta);
    console.log("Método de pago:", metodo_pago);
    console.log("Fecha:", fecha_venta);
    console.log("Observaciones:", observaciones_venta);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Venta guardada",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);