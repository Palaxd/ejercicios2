
const prompt =require('prompt-sync')();
var palabraoculta=[];
var palabramostrada=["-", "-", "-", "-"];
var contadoraciertos=0;
var contadorfallas=4;

palabraoculta[0]=prompt("Dame la letra 1: " );
palabraoculta[1]=prompt("Dame la letra 2: " );
palabraoculta[2]=prompt("Dame la letra 3: " );
palabraoculta[3]=prompt("Dame la letra 4: " );
//console.log(palabraoculta);

for(var i=0; i<(palabraoculta.length*2); i++){
    var intento=prompt("Ingresa letra: ");
    switch(intento){
        case palabraoculta[0]:
            palabramostrada[0]=palabraoculta[0];
            console.log(palabramostrada[0]);
            contadoraciertos++;
            break;
        case palabraoculta[1]:
            palabramostrada[1]=palabraoculta[1];
            console.log(palabramostrada[1]);
            contadoraciertos++;
            break;
        case palabraoculta[2]:
                palabramostrada[2]=palabraoculta[2];
                console.log(palabramostrada[2]);
                contadoraciertos++;
                break;
        case palabraoculta[3]:
                    palabramostrada[3]=palabraoculta[3];
                    console.log(palabramostrada[3]);
                    contadoraciertos++;
                    break;
        default:
            console.log("TE EQUIVOCASTE");
            console.log("Te quedan "+(contadorfallas-1)+" intentos");
            console.log(palabramostrada);
            contadorfallas--;
            break;
    }
    if(contadoraciertos==4){
        break;
    }else if(contadorfallas==0){
        break;
    }
}
if(contadorfallas==0){
    console.log("PERDISTE");
}else if(contadoraciertos==4){
    console.log("GANASTE");
}