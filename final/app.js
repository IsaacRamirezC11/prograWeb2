const express = require('express');

const mysql = require('mysql2');

const bodyParser = require('body-parser');

const app = express();

//Manejo de peticiones HTTP por medio de req

app.use(bodyParser.urlencoded({ extended: false }));

//Configuracion de plantillas

app.set('view engine', 'ejs');

//Conexion a la base de datos

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '040411',
    database: 'node_crude',
    port: 3306

});

//validar la conexion a la base de datos

db.connect(err => {
    if(err){
        console.log('Error de conexion a la base de datos');
    }else{
        console.log('Conectado a la base de datos');
    }
});

//Inicio de server

const PORT = 3006;

app.listen(PORT, () => {
    console.log(`Server funcionando en el puerto http://127.0.0.1:${PORT}`);
});

//Mostrar lista de los usuarios

app.get('/', (req, res) => {

    //consulta a la base de datos

    const consultaDB = 'SELECT * FROM users';

    //Trabajamos con la base de datos

    db.query(consultaDB, (err, results) => {
        if(err){
            
            // no se pudo recuperar la informacion de la base de datos

            console.error('Error al recuperar el usuario', err);
            
            //Mostraremos informacion al usuario

            res.send('Error, no se pudo recuperar la informacion de la base de datos');

    }else{

        //Mostraremos la informacion al usuario

        res.render('index', { users: results });
    }
});

});

//Modulo para agregar un nuevo usuario

app.post('/add', (req, res) => {

    const { name, email } = req.body;

    /*
        Nombre: Isaac
        Correro: isaaccortes08@aragon.unam.mx
        -->

        Nombre: Isaac
        Correro: isaaccortes08@aragon.unam.mx

    */

const insertarRegistro = 'INSERT INTO users (name, email) VALUES (?, ?)';

db.query(insertarRegistro, [name, email], (err, results) => {
    if (err) {
        console.error('Error al insertar el registro', err);
        res.send('Error, no se pudo insertar el registro');
         } else {
                console.log('Registro insertado correctamente');
                res.redirect('/');
            }
        });
});

//Modulo editar un usuario
app.post('/add', (req, res) => {

});

//editar un usuario
app.get('/edit/:id', (req, res) => {
    const{id}=req.params;
    const buscarUsuariID = 'SELECT * FROM users WHERE id = ?';
    db.query(buscarUsuariID, [id], (err, results) => {
        if (err) {
            console.error('Error al buscar el usuario', err);
            res.send('Error, no se pudo recuperar la informacion de la base de datos');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// update

app.post('/update/:id', (req, res) => {

    const { id } = req.params;
    const { name, email } = req.body;

    const actualizarUsuario = 'UPDATE users SET name = ?, email = ? WHERE id = ?';

    db.query(actualizarUsuario, [name, email, id], (err ) => {
        if (err) {
            console.error('Error al actualizar el usuario', err);
            res.send('Error, no se pudo actualizar el usuario');
        } else {
            console.log('Usuario actualizado correctamente');
            res.redirect('/');
        }
    });

});


// Eliminar un usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const eliminarUsuario = 'DELETE FROM users WHERE id = ?';

    db.query(eliminarUsuario, [id], (err) => {
        if (err) {
            console.error('Error al eliminar el usuario', err);
            res.send('Error, no se pudo eliminar el usuario');
        } else {
            console.log('Usuario eliminado correctamente');
            res.redirect('/');
        }
    });
});

// Eliminar todos los usuarios y reiniciar autoincrement
app.get('/deleteAll', (req, res) => {
    db.query('DELETE FROM users', (err) => {
        if (err) {
            console.error('Error al eliminar todos los usuarios', err);
            res.send('Error, no se pudo eliminar los usuarios');
        } else {
            db.query('ALTER TABLE users AUTO_INCREMENT = 1', (err2) => {
                if (err2) {
                    console.error('Error al reiniciar el autoincrement', err2);
                    res.send('Usuarios eliminados, pero error al reiniciar autoincrement');
                } else {
                    console.log('Todos los usuarios eliminados y autoincrement reiniciado');
                    res.redirect('/');
                }
            });
        }
    });
});
   