//Ejercicios Creación de variables

//Una variable global de tipo 
var global = "Global";
// Variable Local
let local = "Local";
// Constante
const constante = "constante";

console.log("Variables: Global: " + global + "- Local: "
            + local + " - Constante: " + constante);

let num = 4; // Número Entero
let decimal = 3.1416; // Número decimal
let string = "texto"; // Cadena de texto
let bool = true; //Booleano
let array = ["Perro",20, "Gato", 50]; // Arreglo
let objeto = {   // Tipo Objeto
                Edad:20, 
                Nombre: "Dany", 
                Telefono: "8116851",
                Dirección: "El Rosal 2158"
            };
let indefinida; // Indefinida
let nula = null; // Nulo

function sumar(){ // Función sin parametros
    return 10 + 5;
};

console.log("Variables:\nEntero: " + num +
"\nDecimal: " + decimal + "\nString: " + string
+ "\nBooleano: " + bool + "\nArreglo: " + array
+ "\nObjeto: " + JSON.stringify(objeto) + 
"\nIndefinida: " + indefinida
+ "\nNula: " + nula + "\nResultado de Función: " +
sumar());
console.log( sumar() );

