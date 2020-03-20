'use strict';

const button = document.getElementById('boton');
const p = document.getElementById('hola');

button.addEventListener('click', () => {
    p.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
})

