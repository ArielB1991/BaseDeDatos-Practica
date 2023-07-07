const rutas= require('express').Router()
const controladorArtxComp= require('../Controllers/articuloxCompra.controllers');

rutas.get('/lista', controladorArtxComp.lista)

rutas.get('/filtro/:campo/:valor', controladorArtxComp.filtro)

rutas.post('/nuevo', controladorArtxComp.nuevaC)

rutas.put('/actualiza/:id', controladorArtxComp.act)

rutas.delete('/eliminar/:id', controladorArtxComp.eliminar)

module.exports= rutas;
