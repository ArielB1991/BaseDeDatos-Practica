const rutas= require('express').Router();
const controladorArticulo= require('../Controllers/articulo.controllers');


rutas.get('/lista', controladorArticulo.lista)

rutas.get('/filtro/:campo/:valor', controladorArticulo.filtro)

rutas.post('/nuevo', controladorArticulo.nuevoArt)

rutas.put('/actualizar/:id', controladorArticulo.act)

rutas.delete('/eliminar/:id',controladorArticulo.eliminar)


module.exports= rutas;