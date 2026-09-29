function ValidarInformacion() {

    let nombre_cliente = document.getElementById("nombre_cliente").value.trim();
    let vehiculo_servicio = document.getElementById("vehiculo_servicio").value.trim();
    let tipo_servicio = document.getElementById("tipo_servicio").value.trim();
    let fecha_servicio = document.getElementById("fecha_servicio").value.trim();
    let precio_servicio = document.getElementById("precio_servicio").value.trim();
    let descripcion_servicio = document.getElementById("descripcion_servicio").value.trim();
    let estado_servicio = document.getElementById("estado_servicio").value.trim();

    if (
        nombre_cliente === "" ||
        vehiculo_servicio === "" ||
        tipo_servicio === "" ||
        fecha_servicio === "" ||
        precio_servicio === "" ||
        descripcion_servicio === "" ||
        estado_servicio === ""
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

    console.log("Información del Servicio");
    console.log("Cliente:", nombre_cliente);
    console.log("Vehículo:", vehiculo_servicio);
    console.log("Tipo de servicio:", tipo_servicio);
    console.log("Fecha:", fecha_servicio);
    console.log("Precio:", precio_servicio);
    console.log("Descripción:", descripcion_servicio);
    console.log("Estado:", estado_servicio);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Servicio guardado",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);