'use strict';
/* intento 
var precio = 10;
var ivaN = iva();
var total = add();

function iva(precio) {
     ivaN = (precio / 100) * 21;
    return console.log(ivaN);
}

function add(precio, ivaN) {
     total = precio + ivaN;
    return console.log(total);
    
}

document.write("Precio sin IVA: " + precio + ", " + "IVA: " + ivaN + "Total: " + total);
ivaN(precio); */

var precio 
var iva = 0;
var total = 0;

precio = parseInt(prompt("Ingrese el valor"));

function calcularValor(precio) {

    iva = precio*.21;
    total = iva+precio;
    console.log("Precio sin IVA: " + precio + ", " + "IVA: " + iva + "Total: " + total);
    
    
}

calcularValor(precio);