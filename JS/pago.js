function ValidarInformacion() {

    let cliente_pago = document.getElementById("cliente_pago").value.trim();
    let concepto_pago = document.getElementById("concepto_pago").value.trim();
    let valor_pago = document.getElementById("valor_pago").value.trim();
    let metodo_pago = document.getElementById("metodo_pago").value.trim();
    let fecha_pago = document.getElementById("fecha_pago").value.trim();
    let referencia_pago = document.getElementById("referencia_pago").value.trim();
    let observaciones_pago = document.getElementById("observaciones_pago").value.trim();

    if (
        cliente_pago === "" ||
        concepto_pago === "" ||
        valor_pago === "" ||
        metodo_pago === "" ||
        fecha_pago === "" ||
        referencia_pago === "" ||
        observaciones_pago === ""
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

    console.log("Información del Pago");
    console.log("Cliente:", cliente_pago);
    console.log("Concepto:", concepto_pago);
    console.log("Valor:", valor_pago);
    console.log("Método de pago:", metodo_pago);
    console.log("Fecha:", fecha_pago);
    console.log("Referencia:", referencia_pago);
    console.log("Observaciones:", observaciones_pago);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pago guardado",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);