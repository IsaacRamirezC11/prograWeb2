const frutas=[];

const fruta = prompt("¿Qué fruta deseas agregar al carrito?");

frutas.push(fruta);
    console.log(frutas);

while(confirm("¿Qué otra fruta deseas agregar?")){
    const fruta = prompt("Agrega otra fruta");
    frutas.push(fruta);
}
console.log("Usted tiene en su carrito las siguientes frutas");
for(let fruta of frutas){
    console.log(fruta);
}