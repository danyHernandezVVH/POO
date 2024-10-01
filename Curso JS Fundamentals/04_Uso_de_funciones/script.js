    // Creamos una matriz de calificaciones de estudiantes
    let calificaciones = [
        [85, 90, 78],
        [92, 88, 79],
        [75, 82, 91]
    ];

    // Mostrar matriz original
    function mostrarMatriz() {
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = "Matriz de Calificaciones Original:<br>";
        calificaciones.forEach(function(fila) {
            resultadoElement.innerHTML += fila.join(", ") + "<br>";
        });
    }

    // Mostrar una calificación específica
    function mostrarCalificacion(fila, columna) {
        let calificacion = obtenerCalificacion(fila, columna);
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `Calificación en la fila ${fila + 1}, columna ${columna + 1}: ${calificacion}<br>`;
    }

    // Modificar una calificación
    function modificarCalificacion(fila, columna, nuevaCalificacion) {
        calificaciones[fila][columna] = nuevaCalificacion;
        mostrarMatriz();
    }

    // Calcular el promedio de un estudiante
    function calcularPromedio(estudiante) {
        let promedio = calcularPromedioEstudiante(estudiante);
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `Promedio del estudiante ${estudiante + 1}: ${promedio.toFixed(2)}<br>`;
    }

    // Función para obtener una calificación específica
    function obtenerCalificacion(fila, columna) {
        return calificaciones[fila][columna];
    }

    // Función para calcular el promedio de un estudiante
    function calcularPromedioEstudiante(estudiante) {
        let calificacionesEstudiante = calificaciones[estudiante];
        let sumaCalificaciones = calificacionesEstudiante.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
        return sumaCalificaciones / calificacionesEstudiante.length;
    }