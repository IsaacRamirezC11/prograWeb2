//impotamos el modulo HTTP que viene incluido en node
const PaquetesServidorNodeImportado = require('http');

//definimos puerto de salida de servidor
const port = 3005;

//crear un servidor
const server = PaquetesServidorNodeImportado.createServer((req,res)=>{
    //establece el encabezado 
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //enviamos respuesta
    res.end('Holla mundo con Node.js');
    // node app.js 

});

//Escucha el puerto

server.listen(port, () => {
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});
