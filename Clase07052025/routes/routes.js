const express = require('express');

const path = require('path');

const router = express.Router();

// Ruta principal

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Ruta de registro

router.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname, '../views/registro.html'));
  });


module.exports = router;
