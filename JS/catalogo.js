function ValidarInformacion() {

    let modelo_vehiculo = document.getElementById("modelo_vehiculo").value.trim();
    let categoria_vehiculo = document.getElementById("categoria_vehiculo").value.trim();
    let precio_vehiculo = document.getElementById("precio_vehiculo").value.trim();
    let descripcion_vehiculo = document.getElementById("descripcion_vehiculo").value.trim();
    let anio_vehiculo = document.getElementById("anio_vehiculo").value.trim();
    let color_vehiculo = document.getElementById("color_vehiculo").value.trim();
    let cantidad_vehiculo = document.getElementById("cantidad_vehiculo").value.trim();

    if (
        modelo_vehiculo === "" ||
        categoria_vehiculo === "" ||
        precio_vehiculo === "" ||
        descripcion_vehiculo === "" ||
        anio_vehiculo === "" ||
        color_vehiculo === "" ||
        cantidad_vehiculo === ""
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

    console.log("Información del Vehículo");
    console.log("Modelo:", modelo_vehiculo);
    console.log("Categoría:", categoria_vehiculo);
    console.log("Precio:", precio_vehiculo);
    console.log("Descripción:", descripcion_vehiculo);
    console.log("Año:", anio_vehiculo);
    console.log("Color:", color_vehiculo);
    console.log("Cantidad:", cantidad_vehiculo);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Vehículo guardado",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);