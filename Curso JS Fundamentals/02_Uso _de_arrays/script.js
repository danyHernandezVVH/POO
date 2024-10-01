// Creamos un array de frutas
let frutas = ["manzana", "plátano", "naranja"];

// Mostramos el array original
let resultadoElement = document.getElementById("resultado");
resultadoElement.innerHTML += "Array original: " + frutas.join(", ") + "<br>";

// Utilizamos el método push para agregar una fruta al final del array
frutas.push("pera");
resultadoElement.innerHTML += "Después de push('pera'): " + frutas.join(", ") + "<br>";

// Utilizamos el método shift para eliminar el primer elemento del array
frutas.shift();
resultadoElement.innerHTML += "Después de shift(): " + frutas.join(", ") + "<br>";

// Utilizamos el método unshift para agregar una fruta al principio del array
frutas.unshift("sandía");
resultadoElement.innerHTML += "Después de unshift('sandía'): " + frutas.join(", ") + "<br>";

// Utilizamos el método pop para eliminar el último elemento del array
frutas.pop();
resultadoElement.innerHTML += "Después de pop(): " + frutas.join(", ") + "<br>";
