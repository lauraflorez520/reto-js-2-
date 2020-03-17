'use strict';

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
ivaN(precio);