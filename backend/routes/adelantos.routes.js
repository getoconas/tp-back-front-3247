// Creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

// Definimos el controlador para el manejo del CRUD
const adelantoCtrl = require('./../controllers/adelanto.controller');

// Definimos las rutas
router.get('/', adelantoCtrl.getAdelantos);
router.post('/', adelantoCtrl.createAdelanto);
router.get('/:id', adelantoCtrl.getAdelanto);
router.put('/:id', adelantoCtrl.editAdelanto);
router.delete('/:id', adelantoCtrl.deleteAdelanto);

// Exportacion del modulo de rutas
module.exports = router;