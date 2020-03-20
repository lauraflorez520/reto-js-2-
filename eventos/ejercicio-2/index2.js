'use script';

const button = document.getElementById('buttom');
const input = document.getElementById('input');

input.value = prompt("Digite su nombre");

button.addEventListener('click', () => {
    console.log("hola "+ input.value);
})


