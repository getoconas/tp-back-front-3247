// Creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

// Definimos el controlador para el manejo del CRUD
const empresaCtrl = require('./../controllers/empresa.controller');

// Definimos las rutas
router.get('/', empresaCtrl.getEmpresas);
router.post('/', empresaCtrl.createEmpresa);

// Exportacion del modulo de rutas
module.exports = router;