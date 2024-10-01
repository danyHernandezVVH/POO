function imprimirPares(n) {
    let numeros = [];
    let pares = [];

    // Pedir al usuario que ingrese n valores
    for (let i = 0; i < n; i++) {
        let valor = parseInt(prompt(`Ingresa el valor ${i + 1} de ${n}:`));
        numeros.push(valor);
    }

    // Filtrar los números pares manualmente
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
	console.log(`Numeros ingresados:  ${numeros.join(" - ")}`);
    return pares;
}
// Solicitar al usuario que ingrese el valor de N
let n = parseInt(prompt("Ingresa la cantidad de números que vas a ingresar:"));
if (n <= 0){
    console.log("Ingresa un valor sobre 0");
}  else if (n > 0){
    console.log(`Los pares son: ${imprimirPares(n).join(" - ")}`);
    } else {
        alert("Ingrese un valor valido!!!")
    }
