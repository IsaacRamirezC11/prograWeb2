function suma(a, b) {
    return Number(a) + Number(b);
}

function resta(a, b) {
    return Number(a) - Number(b);
}

function multiplicacion(a, b) {
    return Number(a) * Number(b);
}

function division(a, b) {
    if (Number(b) === 0) {
        return "Error: No se puede dividir entre 0";
    }
    return Number(a) / Number(b);
}

function calculadora() {
    let opcion = Number(prompt(`
        Elige la operación que quieres realizar: 
        1. SUMA
        2. RESTA
        3. MULTIPLICACIÓN
        4. DIVISIÓN
    `));

    let numero1 = prompt("Ingresa el primer número: ");
    let numero2 = prompt("Ingresa el segundo número: ");

    let resultado;

    switch (opcion) {
        case 1:
            resultado = suma(numero1, numero2);
            console.log(`La suma es: ${resultado}`);
            break;
        case 2:
            resultado = resta(numero1, numero2);
            console.log(`La resta es: ${resultado}`);
            break;
        case 3:
            resultado = multiplicacion(numero1, numero2);
            console.log(`La multiplicación es: ${resultado}`);
            break;
        case 4:
            resultado = division(numero1, numero2);
            console.log(`La división es: ${resultado}`);
            break;
        default:
            console.log("¡ERROR! Opción no válida.");
    }
}

// Llamar a la función calculadora
calculadora();
