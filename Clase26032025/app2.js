/*
//Funcion declarativa

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
}
// invocar la función
console.log(numeroAleatorio(1, 11));


//Funcion declarativa
const miNumero = function(min, max){
    return Math.floor(Math.random() * (max - min) + max);
}

console.log(miNumero(10, 35));


function dato (a){
    return a + 100;
}

var datos = function(a){
    return a + 100;
}

//var datos = (a) => return a + 100;

var datos = a => a + 100;


let numeroAleatorioFlecha = (min, max) => Math.floor(Math.random() * (max - min) + max);

const array1 = ['a', 'b', 'c', 'd'];

array1.forEach(element => console.log(element));

/*
arr.forEach(function callback (currentValue, index, array)) {
    //Iterador
}
    */

let frutas = ["Manzana", "Sandia","Pera","Naranja"];

frutas.forEach((fruta,index,array)=>{
    console.log(index)
});