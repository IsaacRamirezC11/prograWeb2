//importar express
const express = require('express');

//Generar una instancia de express

const app = express();

//definicion de puerto
const port = 5023;

//peticiones vs metodos
//ESTA ES UNA PETICION GET
app.get('/', (req, res) => {
    res.send('Hola Mundo desde puerto 5023');    
});

app.listen(port);