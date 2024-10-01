// Comentarios

/* ------------------ Comentarios en muchas 
----------------------------------- líneas*/

//Uso de Variables

var global = "global"; //Uso Global
let local = "local"; // Uso Local
const mes ="Marzo"; //Dato no modificable

// Tipos de Datos

let edad = 25; // Un número entero
let precio = 19.99; // Un número decimal

let nombre = "Juan"; // Una cadena de texto
let mensaje = 'Hola, ¿cómo estás?'; // Puedes usar comillas simples o dobles

let esMayorDeEdad = true; // Verdadero (true) o Falso (false)
let llueve = false;

let frutas = ["manzana", "plátano", "naranja"]; // Un conjunto de valores
let numeros = [1, 2, 3, 4, 5];

let persona = {
    nombre: "María",
    edad: 30,
    esEstudiante: true
}; // Una colección de pares clave-valor


let variableIndefinida; // La variable está declarada pero no tiene valor

let valorNulo = null; // La variable tiene un valor nulo

function sumar(a, b) {
    return a + b;
} // Una función que realiza una operación

let fechaActual = new Date(); // Representa una fecha y hora

let expresionRegular = /patrón/; // Define un patrón de búsqueda

const simboloUnico = Symbol("Descripción opcional"); // Representa un valor único

const valorGrande = 1234567890123456789012345678901234567890n; // Representa números enteros muy grandes

// Crear un elemento de párrafo para mostrar los resultados
let resultadoElement = document.getElementById("resultado");

// Mostrar las variables en el párrafo
resultadoElement.innerHTML = "Edad: " + edad + "<br>";
resultadoElement.innerHTML += "Nombre: " + nombre + "<br>";
resultadoElement.innerHTML += "Es Mayor de Edad: " + esMayorDeEdad + "<br>";
resultadoElement.innerHTML += "Frutas: " + frutas.join(", ") + "<br>";
resultadoElement.innerHTML += "Persona: " + JSON.stringify(persona) + "<br>";
resultadoElement.innerHTML += "Variable Indefinida: " + variableIndefinida + "<br>";
resultadoElement.innerHTML += "Valor Nulo: " + valorNulo + "<br>";