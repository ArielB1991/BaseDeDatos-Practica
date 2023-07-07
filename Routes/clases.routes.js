const rutas= require('express').Router();
const controladorClases= require('../Controllers/clases.controllers');

rutas.get('./lista', controladorClases.lista);

rutas.get('filtrar/:campo/:valor', controladorClases.filtro)

rutas.post('/nuevo', controladorClases.nuevaClase)

rutas.put('/actualizar/:id', controladorClases.act)

rutas.delete('/eliminar/:id', controladorClases.eliminar)


module.exports= rutas;