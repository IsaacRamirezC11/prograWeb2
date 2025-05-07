const express=require('express');
const router=express.Router();
const path=require('path');


//Definimos las rutas y los manejaodores

// ruta Formulario
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../index.html"));
});

// ruta Formulario 2
//router.get("/miruta2.html",(req,res)=>{
//    res.sendFile(path.join(__dirname+"/../miruta2.html"));
//});

// ruta Formulario 3
//router.get("/miruta3.html",(req,res)=>{
//    res.sendFile(path.join(__dirname+"/../miruta3.html"));
//});

// ruta Formulario 4
//router.get("/miruta4.html",(req,res)=>{
//    res.sendFile(path.join(__dirname+"/../miruta4.html"));
//});

module.exports=router;