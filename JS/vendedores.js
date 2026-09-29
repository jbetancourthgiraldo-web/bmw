function ValidarInformacion() {

    let nombre_vendedor = document.getElementById("nombre_vendedor").value.trim();
    let documento_vendedor = document.getElementById("documento_vendedor").value.trim();
    let telefono_vendedor = document.getElementById("telefono_vendedor").value.trim();
    let correo_vendedor = document.getElementById("correo_vendedor").value.trim();
    let cargo_vendedor = document.getElementById("cargo_vendedor").value.trim();
    let fecha_ingreso = document.getElementById("fecha_ingreso").value.trim();
    let estado_vendedor = document.getElementById("estado_vendedor").value.trim();

    if (
        nombre_vendedor === "" ||
        documento_vendedor === "" ||
        telefono_vendedor === "" ||
        correo_vendedor === "" ||
        cargo_vendedor === "" ||
        fecha_ingreso === "" ||
        estado_vendedor === ""
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

    console.log("Información del Vendedor");
    console.log("Nombre:", nombre_vendedor);
    console.log("Documento:", documento_vendedor);
    console.log("Teléfono:", telefono_vendedor);
    console.log("Correo:", correo_vendedor);
    console.log("Cargo:", cargo_vendedor);
    console.log("Fecha de ingreso:", fecha_ingreso);
    console.log("Estado:", estado_vendedor);

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Vendedor guardado",
        showConfirmButton: false,
        timer: 1500
    });
}

document.getElementById("btnGuardar").addEventListener("click", ValidarInformacion);