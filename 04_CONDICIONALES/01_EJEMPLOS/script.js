function identificarMayorEdad()
    {
        let resultado = "";
        //Identificar si es Mayor o menor de Edad
        let edad = parseInt(prompt("Por favor ingrese su Edad: "));

        if(edad >= 18 ){
            resultado = `Es mayor de edad - tiene : <h2>${edad}</h2>`
        } else {
            resultado = `Es menor de edad - tiene: <h2>${edad}</h2>`
        }
        document.getElementById('lista').innerHTML = resultado;
        

    }


function rangosNumericos(){
    let num = parseInt(prompt("Ingresa Numero"));
    if(num < 5){
        console.log("Menor que 5")
    } else if(num < 20){
        console.log("Rango 6 a 19")
    } else {
        console.log("Rango menor que 0 o superior a 19")
    }
}




