// Creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

// Definimos el controlador para el manejo del CRUD
const mensajeCtrl = require('./../controllers/mensaje.controller');

// Definimos las rutas
router.get('/', mensajeCtrl.getMensajes);
router.post('/', mensajeCtrl.createMensaje);

// Exportacion del modulo de rutas
module.exports = router;