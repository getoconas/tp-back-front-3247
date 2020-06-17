// Creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

// Definimos el controlador para el manejo del CRUD
const asistenteCtrl = require('./../controllers/asistente.controller');

// Definimos las rutas
router.get('/', asistenteCtrl.getAsistentes);
router.post('/', asistenteCtrl.createAsistente);
router.get('/:id', asistenteCtrl.getAsistente);
router.put('/:id', asistenteCtrl.editAsistente);
router.delete('/:id', asistenteCtrl.deleteAsistente);

// Exportacion del modulo de rutas
module.exports = router;