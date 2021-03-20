//declaracion de una funcion
function multiplicar(operando1, operando2){
    var result=operando1*operando2;
    console.log("El resultado es: "+result);
}
multiplicar(10, 2);

function multiplicar3(){
    var result3=5*2;
    console.log("El resultado es: "+result3);
}
multiplicar3();


var result2=function multiplicar2(operando1){
    return operando1*2;
}
//console.log(result2(25));

//funcion flecha
//funcion para saludar a una persona
const saludaPersona=(nombre) => console.log("Hola "+nombre);
saludaPersona("Luis");

const multiplix4=(numero) => console.log(numero * 4);
multiplix4(10);

//escribir un programa que tenga una funcion a la que
//se le pasa como parametro un numero y devuelve como
//resultado un texto que indica si el numero es par o impar

function determinarN(numero){
    if((numero%2)==1){
        console.log("El numero es par");
    }else{
        console.log("El numero es impar")
    }
}

determinarN(10);

//determinar una funcion que muestre un valor de un texto
//que se introduce como un argumento y determinar si el texto
//contiene mayusculas, minusculas o ambbas

function determinarT(texto){
    if(texto==texto.toUpperCase()){
        console.log("El texto esta en mayusculas");
    }else if(texto==texto.toLowerCase()){
        console.log("El texto esta en minusculas");
    }else{
        console.log("El texto tiene ambas");
    }
}
determinarT("tExto");