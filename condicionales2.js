//Dado un numero esperado, centenas, decenas y unidades
//intecambiar la posicion entre decenas y unidades
//imprimir numero final

var numeroC=738;
if(numeroC<=999 && numeroC>=100){
    var centenas= parseInt(numeroC/100);
    //console.log(centenas);
    var decenas =parseInt((numeroC%100)/10);
    //console.log(decenas);
    var unidades=parseInt(((numeroC%100)%10)/1);
    //console.log(unidades);
    //console.log("el valor final es:  "+unidades+decenas+centenas);
}else{
    console.log("ingresa un numero de 3 cifras");
}

//Condicional switch
var condicionS="Luis";

switch(condicionS){
    case 2:
        console.log("el valor ingresado es 2");
        break;
    case 6: 
    console.log("el valor ingresado es 6");
    break;
    case "Luis":
        console.log("Luis");
        break;
    default:
        console.log("entraste al default");
}