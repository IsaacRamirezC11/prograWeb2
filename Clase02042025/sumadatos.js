document.getElementById("sumaForm").addEventListener('submit',
    function (event){
        event.preventDefault(); // Evitar el envío del formulario
        let numero1 = parseFloat( document.getElementById("numero1").value); 
        let numero2 = parseFloat( document.getElementById("numero2").value);
        let resultado = numero1 + numero2;

        console.log(resultado);

        document.getElementById('resultado').innerText = "El resultado es: " + resultado;
    }
);