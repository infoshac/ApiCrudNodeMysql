const express= require('express');
const router= express.Router();
const CarroController= require('./Controllers/CarroControllers');

router.get('/carros', CarroController.buscarCarros)
router.get('/carro/:codigo', CarroController.BuscarUm )
router.post('/carro', CarroController.inserir)
router.put('/carro/:codigo', CarroController.Alterar)
router.delete('/carro/:codigo', CarroController.Deletar)

module.exports= router;