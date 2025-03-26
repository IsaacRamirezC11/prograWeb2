//Inicialización de la lista de tareas

let tareas = [];

//funcion para mostrar un menu

function mostrarMenu(){

return parseInt(prompt(
    "Opciones disponibles: \n"+
    "1. Agregar la tarea: \n"+
    "2. Ver todas las tareas: \n"+
    "3. Marcar una tarea como completada: \n"+
    "4. Salir: \n" +
    "Elige una opcion: "
));

}


function agregarTarea(){

    let nombreTarea = prompt("Ingrese el nombre de la tarea: ");
    if(nombreTarea){
        let tarea = {
            nombre: nombreTarea,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }

    console.log("En proceso");
}

function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas agregadas");
    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" : "Pendiente"}\n`;
        });
        alert(mensaje);
    }
}

function marcarTareaCompletada(){
    consolo.log("En proceso");
}

// Funcion principal para mejorar el programa

function iniciarPrograma(){
    
    let condicion = true;
    while(condicion){

        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break; 
            case 4:
                alert("Saliendo del programa");
                condicion = false;
                break;
            default:

        }
    }

}

//Iniciar programa
iniciarPrograma();

