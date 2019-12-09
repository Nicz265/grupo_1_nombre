// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/registro', mainController.registro);
router.get('/carga-producto', mainController.cargaProducto);
router.get('/detalle', mainController.detalle);

module.exports = router;
