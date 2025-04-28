//Importar el módulo http
const serverHTTP = require('http');

//Definir un puerto:

const port = 3059;

//Crear el servidor HTTP

const server = serverHTTP.createServer((req, res) => {
   
    //Configurar la cabecera de la respuesta
    res.writeHead(200, { 'Content-Type': 'text-plain' });
   
    //Enviar la respuesta al cliente
    res.end('<h1>Hola Mundo desde el server en Node con el modulo HTTP</h1>');
   
    }
);


server.listen(port, () => {
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`);
    }
);
