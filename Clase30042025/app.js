//Importar express
const express= require('express');

//creacion de una instancia
const app = express();

//definir el puerto
const port = 3099;

//Configuracion de ruta get para la raiz ('/')
app.get('/',(req,res)=>{
    res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`);
    }
);
