
var frutas1=["Mandaria", "Piña", "Sandia", "Durazno"];
var frutas2=["Mandarina", "Piña", "Pera", "Durazno"];
var arrenum=[5000, 10, 200, 1000, 400];//original
frutas1.sort();
console.log(frutas1);
frutas2.sort();
console.log(frutas2);
// .sort no reconmendable para numeros
arrenum.sort();
console.log(arrenum);//ordenada 
//ahora cambian las posiciones
console.log(arrenum[4] );

for(var i=0; i>=5; i++){
    console.log("Hola "+i);
}

for(var i=10; i>=2; i--){
    console.log("Hola "+i);
}

for(var i=0; i<arrenum.length; i++){
    console.log("la posicion numero "+i+" es "+arrenum[i]);
}