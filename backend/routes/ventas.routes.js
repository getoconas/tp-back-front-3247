// Creamos un manejador de rutas modulares
const express = require('express');
const router = express.Router();

// Definimos el controlador para el manejo del CRUD
const mensajeCtrl = require('./../controllers/venta.controller');

// Definimos las rutas
router.get('/', VentaCtrl.getVentas);
router.post('/', VentaCtrl.createVenta);
router.get('/:id', VentaCtrl.getVenta);
router.put('/:id', VentaCtrl.editVenta);
router.delete('/:id', VentaCtrl.deleteVenta);

// Exportacion del modulo de rutas
module.exports = router;