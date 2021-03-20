
//cracion de un objeto
var celular={
    color: "azul",
    peso: "80g",
    numCamaras: 2,
    sistema: "android",
    duracionBateria: 10
}

//console.log(celular);
//NOTA: llamar caracteristicas especificas
//console.log(celular.color);
//console.log(celular["numCamaras"]);

class galleta{
    constructor(tamaño, forma, sabor){
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;
    }
}
let galleta1=new galleta("5x5cm", "cuadrada", "Chocolate");
let galleta2=new galleta("3x5cm", "rectangular", "Fresa");
console.log(galleta1);
console.log(galleta2);
console.log(galleta1.sabor);
console.log(galleta2["sabor"]);