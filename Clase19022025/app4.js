/* TAREA DE COMPARAR NUMEROS*/


var dato1 = prompt("Ingresa Numero 1: ");
var dato2 = prompt("Ingresa Numero 2: ");
var dato3 = prompt("Ingresa Numero 3: ");

dato1 = Number(dato1);
dato2 = Number(dato2);
dato3 = Number(dato3);

if (dato1 === dato2 && dato2 === dato3) {
    console.log("Todos los números son iguales.");
} else {
    if (dato1 === dato2) {
        console.log(`El número ${dato1} es igual al número ${dato2}.`);
    } else if (dato1 === dato3) {
        console.log(`El número ${dato1} es igual al número ${dato3}.`);
    } else if (dato2 === dato3) {
        console.log(`El número ${dato2} es igual al número ${dato3}.`);
    } else {
        console.log("No hay números iguales.");
    }

    let mayor = Math.max(dato1, dato2, dato3);
    let menor = Math.min(dato1, dato2, dato3);

    console.log(`El número mayor es ${mayor}.`);
    console.log(`El número menor es ${menor}.`);
}



/* TAREA DE JUEGO DE NUMEROS ALEATORIOS */

let numeroMaquina = Math.floor(Math.random() * 10) + 1;
console.log(numeroMaquina); // Puedes comentar esta línea para no mostrar el número de la máquina

let numeroUser = parseInt(prompt("Ingresa un número de 1 a 10: "));
let vidas = 5;

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt("El número no es correcto. Te quedan: " + vidas + " vidas. Ingresa otro número: "));
}

if (numeroMaquina === numeroUser) {
    console.log("¡Ganaste!");
} else {
    console.log("Perdiste. El número correcto era: " + numeroMaquina);
}
