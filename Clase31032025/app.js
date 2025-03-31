let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n" +
        "1. Agregar producto \n" +
        "2. Mostrar todos los productos \n" +
        "3. Buscar producto por nombre \n" +
        "4. Salir \n" +
        "Elige una opción: "
    ));
}


function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProductoPorNombre();
                break;
            case 4:
                continuar = false;
                alert("Gracias por usar el programa.");
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }

    }
}

function agregarProducto(){

    let nombreProducto = prompt("Nombre del producto: ");
    let cantidadProducto = parseInt(prompt("Cantidad del producto: "));
    let precioProducto = parseInt(prompt("Precio del producto: "));

    if( cantidadProducto > 0 && precioProducto > 0){
    let producto = {
        nombre: nombreProducto,
        cantidad: cantidadProducto,
        precio: precioProducto        
    };
    
    inventario.push(producto);
    alert("Producto agregado exitosamente.");

    }
    
    else{
        alert("La cantidad y el precio deben ser mayores a cero y positivo.");
        console.log("Inventario actualizado:", inventario);
    }

}

function mostrarProductos(){
    if(inventario.length === 0){
        alert("No hay productos en el inventario.");
    }
    else{
        let mensaje = "Productos en el inventario:\n";

        for(let i = 0; i < inventario.length; i++){
            mensaje += `Producto ${i + 1}:\n` +
            `Nombre: ${inventario[i].nombre}\n` +
            `Cantidad: ${inventario[i].cantidad}\n` +
            `Precio: ${inventario[i].precio}\n` +
            "--------------------------------\n";

        }
        alert(mensaje);
    }
    
}

function buscarProductoPorNombre(){
    let nombreBuscado = prompt("Nombre del producto a buscar: ");
    let encontrado = false;

    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()){
            alert(`Producto encontrado:\n` +
            `Nombre: ${inventario[i].nombre}\n` +
            `Cantidad: ${inventario[i].cantidad}\n` +
            `Precio: ${inventario[i].precio}`);
            encontrado = true;
            break;
        }
    }

    if(!encontrado){
        alert("Producto no encontrado en el inventario.");
    }
    console.log("Inventario actualizado:", inventario);
}

// Iniciar el programa
iniciarPrograma();

//generar el buscar producto por nombre