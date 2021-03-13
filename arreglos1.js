
var arregloN=["Luis", "Diana", "Omar", "Paola"];
console.log(arregloN[2]);

//actualizar
arregloN[2]="Rosa";
console.log(arregloN[2]);

//eliminar
delete arregloN[3];
console.log(arregloN[3]);
console.log(arregloN);

//Ssaber nombre del arreglo
console.log("La cantidad de arreglos es: "+arregloN.length);

//poner nuevo
arregloN.push("Cristian","Juan");
console.log(arregloN);

//elimina el elemento final de un arreeglo
arregloN.pop();
console.log(arregloN);

//arregloN.splice(posicion, numero de elementos a borrar, elementos,);
//se puede usar como sea
arregloN.splice(0, 2, "Juan",);
console.log(arregloN);
arregloN.splice(0, 0, "Juan",);
console.log(arregloN);

//realizar un programa que lea por teclado 5 nota
//y muestre el promedio de estas

const prompt=require ('prompt-sync')();
var notas = [];
notas[0]=prompt("Nota de la guia 1: ");
notas[1]=prompt("Nota de la guia 2: ");
notas[2]=prompt("Nota de la guia 3: ");
notas[3]=prompt("Nota de la guia 4: ");
notas[4]=prompt("Nota de la guia 5: ");
//console.log(notas);

var guia1=notas[0];
var guia2=notas[1];
var guia3=notas[2];
var guia4=notas[3];
var guia5=notas[4];
var resultado=parseInt(guia1) + parseInt(guia2)+ parseInt(guia3)+ parseInt(guia4) + parseInt(guia5);
promedio=resultado/5;
console.log(promedio);

var concatena1=["Hola", "Buenas", "Tardes"];
var concatena2=["Hola", "Buenas", "Noches"];
console.log(concatena1.concat(concatena2));