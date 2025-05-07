const express = require('express');

const path = require('path');

const routes = require("./routes/routes.js");

const app = express();

const port = 3534;

// Middleware para imagenes y estilos

app.use(express.static(path.join(__dirname, "public")));

app.use("/",routes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
