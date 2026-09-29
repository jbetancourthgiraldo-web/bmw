function ValidarInformacion() {

    let nombre_cliente = document.getElementById("nombre_cliente").value.trim();
    let documento_cliente = document.getElementById("documento_cliente").value.trim();
    let telefono_cliente = document.getElementById("telefono_cliente").value.trim();
    let correo_cliente = document.getElementById("correo_cliente").value.trim();
    let direccion_cliente = document.getElementById("direccion_cliente").value.trim();
    let ciudad_cliente = document.getElementById("ciudad_cliente").value.trim();
    let vehiculo_interes = document.getElementById("vehiculo_interes").value.trim();

    if (
        nombre_cliente === "" ||
        documento_cliente === "" ||
        telefono_cliente === "" ||
        correo_cliente === "" ||
        direccion_cliente === "" ||
        ciudad_cliente === "" ||
        vehiculo_interes === ""
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

    console.log("Información del Cliente");
    console.log("Nombre:", nombre_cliente);
    console.log("Documento:", documento_cliente);
    console.log("Teléfono:", telefono_cliente);
    console.log("Correo:", correo_cliente);
    console.log("Dirección:", direccion_cliente);
    console.log("Ciudad:", ciudad_cliente);
    console.log("Vehículo de interés:", vehiculo_interes);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cliente guardado",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);