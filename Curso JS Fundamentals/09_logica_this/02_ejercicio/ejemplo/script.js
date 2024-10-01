function contador(elemento) {
    let contador = parseInt(elemento.getAttribute('data-contador'));
    contador++;
    elemento.setAttribute('data-contador', contador);
    elemento.textContent = 'Clics: ' + contador;
}
