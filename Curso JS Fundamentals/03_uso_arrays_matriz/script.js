   // Creamos una matriz de calificaciones de estudiantes
    let calificaciones = [
    [85, 90, 78],
    [92, 88, 79],
    [75, 82, 91]
];

// Mostramos la matriz original
let resultadoElement = document.getElementById("resultado");
resultadoElement.innerHTML += "Matriz de Calificaciones Original:<br>";
resultadoElement.innerHTML += calificaciones[0].join(", ") + "<br>";
resultadoElement.innerHTML += calificaciones[1].join(", ") + "<br>";
resultadoElement.innerHTML += calificaciones[2].join(", ") + "<br>";
resultadoElement.innerHTML += "<br>";

// Accedemos a una posición específica
let primeraCalificacionPrimerEstudiante = calificaciones[0][0];
resultadoElement.innerHTML += "Primera calificación del primer estudiante: " + primeraCalificacionPrimerEstudiante + "<br>";
resultadoElement.innerHTML += "<br>";

// Modificamos una calificación
calificaciones[1][2] = 85;
resultadoElement.innerHTML += "Matriz de Calificaciones después de modificar una calificación:<br>";
resultadoElement.innerHTML += calificaciones[0].join(", ") + "<br>";
resultadoElement.innerHTML += calificaciones[1].join(", ") + "<br>";
resultadoElement.innerHTML += calificaciones[2].join(", ") + "<br>";
resultadoElement.innerHTML += "<br>";

// Calculamos el promedio de calificaciones del segundo estudiante
let promedioSegundoEstudiante = (calificaciones[1][0] + calificaciones[1][1] + calificaciones[1][2]) / 3;
resultadoElement.innerHTML += "Promedio del segundo estudiante: " + promedioSegundoEstudiante + "<br>";