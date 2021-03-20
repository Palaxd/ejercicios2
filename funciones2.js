//ejercicio 1
//Escribir un prorama que obtenga el precio de un producto
//y calcule el precio total, ya que tambien se va cobrar el 
//el costo de envio unicamente unicamente si el precio del 
//producto es mayor o igual a $399

//var nombre="Celular";
//var precio=500;
function precioTotal(precio, nombre){
    var result=0;
    if(precio>=399){
        console.log("Factura");
        console.log("Costo de "+nombre+" es: "+precio);
        console.log("Costo de envio: 100");
        result=precio+100;
        console.log("El total a pagar es: "+result);
    }else if(precio<399){
        console.log("Factura");
        console.log("Costo de "+nombre+" es: "+precio);
        console.log("Costo de envio: 0");
        result=precio;
        console.log("El precio a pagar es: "+result);
    }
}
precioTotal(500,"Manzana");

//ambito de una funcion
function ambiVar(){
    const i=1;
    if(i==1){
    var variableVar="Ambito de variable";
    }
    console.log(variableVar);
}
ambiVar();

//let
//let nombre="Luis";
//nombre="pablo";
//console.log(nombre);

function ambitoLet(){
    const i=1;
    if(i==1){
        let variableLet="Ambito de variable-Let";
        console.log(variableLet);
    }
}
ambitoLet();

var mensaje="texto";

function mensajeF(){
    var mensaje="texto2";
    console.log(mensaje);
}
console.log(mensaje);
mensajeF();
console.log(mensaje);
//como vemos la variable mensaje de la funcion mensajeF solo influye en su funcion

/*no importa si llamamos la funcion antes de declararla
multiplicar(12);

function multiplicar(operando1){
    var resultado=2*operando1;
    console.log(resultado);
}
*/

var resultado=function multiplicar(operando1, operando2){
    return operando1*operando2;
}
console.log(resultado(12, 2));  