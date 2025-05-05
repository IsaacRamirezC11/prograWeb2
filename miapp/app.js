const express = require('express');

const path = require('path');

const routes = require('./routes/routes');

const app = express();

const port = 3005;

//middleware par el css y img

app.use(express.static(path.join(__dirname, "public")));

//Usar la rutas desde el archivo routes.js

app.use("/",routes);

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
}   
);      