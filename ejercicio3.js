//npm install prompt-sync
const prompt=require( 'prompt-sync')();

var mensaje=prompt("Ingresa un mensaje: ");
console.log(mensaje);

//numero a cadena de texto
var numero=25;
//sin cadena
console.log(numero);
//con cadena
console.log(numero.toString()+1);