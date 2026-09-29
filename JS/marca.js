function ValidarInformacion() {

    let nombre_marca = document.getElementById("nombre_marca").value.trim();
    let pais_origen = document.getElementById("pais_origen").value.trim();
    let anio_fundacion = document.getElementById("anio_fundacion").value.trim();
    let tipo_vehiculos = document.getElementById("tipo_vehiculos").value.trim();
    let descripcion_marca = document.getElementById("descripcion_marca").value.trim();
    let pagina_web = document.getElementById("pagina_web").value.trim();
    let estado_marca = document.getElementById("estado_marca").value.trim();

    if (
        nombre_marca === "" ||
        pais_origen === "" ||
        anio_fundacion === "" ||
        tipo_vehiculos === "" ||
        descripcion_marca === "" ||
        pagina_web === "" ||
        estado_marca === ""
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

    console.log("Información de la Marca");
    console.log("Nombre:", nombre_marca);
    console.log("País de origen:", pais_origen);
    console.log("Año de fundación:", anio_fundacion);
    console.log("Tipo de vehículos:", tipo_vehiculos);
    console.log("Descripción:", descripcion_marca);
    console.log("Página web:", pagina_web);
    console.log("Estado:", estado_marca);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Marca guardada",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);