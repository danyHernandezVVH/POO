function agregarTarea() {
    var tareaInput = document.getElementById("tarea");
    var tareaTexto = tareaInput.value;

    if (tareaTexto === "") {
        alert("Ingrese una tarea.");
        return;
    }

    var listaTareas = document.getElementById("listaTareas");

    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    var span = document.createElement("span");
    span.textContent = tareaTexto;

    var botonesDiv = document.createElement("div");

    var btnCompletar = document.createElement("button");
    btnCompletar.className = "btn btn-success btn-sm me-2";
    btnCompletar.textContent = "Completar";
    btnCompletar.onclick = function() {
        completarTarea(this);
    };

    var btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-danger btn-sm";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function() {
        eliminarTarea(this);
    };

    botonesDiv.appendChild(btnCompletar);
    botonesDiv.appendChild(btnEliminar);

    li.appendChild(span);
    li.appendChild(botonesDiv);
    listaTareas.appendChild(li);

    tareaInput.value = "";
}

function completarTarea(elemento) {
    var li = elemento.parentNode.parentNode;
    li.classList.toggle("list-group-item-success");
    if (li.classList.contains("list-group-item-success")) {
        elemento.textContent = "Desmarcar";
    } else {
        elemento.textContent = "Completar";
    }
}

function eliminarTarea(elemento) {
    var li = elemento.parentNode.parentNode;
    li.remove();
}
