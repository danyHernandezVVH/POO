var nombres = [];

function agregarNombre(boton) {
    var inputNombre = document.getElementById("nombre");
    var nuevoNombre = inputNombre.value.trim();

    if (nuevoNombre === "") {
        alert("Por favor ingrese un nombre válido.");
        return;
    }

    nombres.push(nuevoNombre);

    var listaNombres = document.getElementById("listaNombres");
    var li = document.createElement("li");
    li.textContent = nuevoNombre;
    listaNombres.appendChild(li);

    inputNombre.value = "";

    // Cambiar color del botón al agregar un nombre
    boton.style.backgroundColor = 'green';
}
