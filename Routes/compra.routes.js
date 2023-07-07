const rutas= require('express').Router()
const controladorCompra= require('../Controllers/compra.controllers');

rutas.get('/lista', controladorCompra.lista)

rutas.get('/filtro/:campo/:valor', controladorCompra.filtro)

rutas.post('/nuevo', controladorCompra.nuevaCompra)

rutas.put('/actualizar/:id', controladorCompra.act)

rutas.delete('/eliminar/:id', controladorCompra.eliminar)

module.exports= rutas;