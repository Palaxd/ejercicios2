//suma normal
var operando=1000+1000;
console.log(operando);

//suma con variables
var operandoN1=5000;
var operandoN2=1000;
var resultado=operandoN1+operandoN2;
console.log(resultado);

//resta con variables
var resultado=operandoN1-operandoN2;
console.log(resultado);

//multiplicacion
var operadorN3=12;
var operadorN4=2;
resultado2=operadorN3*operadorN4;
console.log(resultado2);

//divicion
var resultado3=operandoN1/operadorN4;
console.log(resultado3);
console.log("el resultado de tu divicion es: "+resultado3);

//operador ++
resultado3++;
console.log(resultado3);
console.log("incrementando la variable en 1: "+resultado3);

//operador --
resultado2--;
console.log(resultado2);
console.log("restando la variable en 1: "+resultado2);

//operadores de asignacion
//Operador =
operandoN1=operandoN2;
console.log(operandoN1);

//operador +=
operadorN3+=operadorN4;//lo mismo que operadorN3=operadorN3+operadorN4;
console.log(operadorN3);

//operadores de comparacion
//mismo valor
var ncomparacion1=5;
var ncomparacion2="5";
var resultadoComparacion=(ncomparacion1==ncomparacion2);
console.log(resultadoComparacion);

//mismo valor y tipo
var ncomparacion1=5;
var ncomparacion2="5";
var resultadoComparacion=(ncomparacion1===ncomparacion2);
console.log(resultadoComparacion);

//diferencia
var ncomparacion1=5;
var ncomparacion2=10;
var resultadoComparacion=(ncomparacion1!=ncomparacion2);
console.log("resultado de la comparacion:  "+resultadoComparacion);

//operadores logicos
var opN1=5;
var opN2=20;
var opN3=30;

//operador && (y)
var resultOp1=(opN1<opN2)&&(opN2<opN3);
var resultOp2=(opN1<opN2)&&(opN2>opN3);
console.log("El resultado del operador && es:  "+resultOp1);
console.log("El resultado del operador && es:  "+resultOp2);


//operador || (o)
var resultOp3=(opN1<opN2)||(opN2>opN3);
console.log("El resultado del operador || es:  "+resultOp3);

//operador de negacion !
var resultOp4=!resultOp3;
console.log("El resultado del operador ! es:  "+resultOp4);
