//importacion de express
const express = require('express');


//instancia de express
const app = express();

//puerto
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo!')
    res.sendFile("c:/Users/Andres/Documents/Escuela/Programacion-web2/05-05-25/index.html")
    
});

app.listen(port, () => {
    console.log('http://127.0.0.1:${port}');
});