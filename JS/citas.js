function ValidarInformacion() {

    let nombre_cliente = document.getElementById("nombre_cliente").value.trim();
    let tipo_cita = document.getElementById("tipo_cita").value.trim();
    let fecha_cita = document.getElementById("fecha_cita").value.trim();
    let hora_cita = document.getElementById("hora_cita").value.trim();
    let telefono_cliente = document.getElementById("telefono_cliente").value.trim();
    let correo_cliente = document.getElementById("correo_cliente").value.trim();
    let observaciones = document.getElementById("observaciones").value.trim();

    if (
        nombre_cliente === "" ||
        tipo_cita === "" ||
        fecha_cita === "" ||
        hora_cita === "" ||
        telefono_cliente === "" ||
        correo_cliente === "" ||
        observaciones === ""
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

    console.log("Información de la Cita");
    console.log("Cliente:", nombre_cliente);
    console.log("Tipo de cita:", tipo_cita);
    console.log("Fecha:", fecha_cita);
    console.log("Hora:", hora_cita);
    console.log("Teléfono:", telefono_cliente);
    console.log("Correo:", correo_cliente);
    console.log("Observaciones:", observaciones);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cita guardada",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);