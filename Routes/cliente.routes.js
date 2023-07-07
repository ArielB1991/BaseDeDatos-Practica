const rutas= requiere('express').Router();
const controladorCliente= require('../Controllers/cliente.controllers');

rutas.get('/lista', controladorCliente.lista)

rutas.get('/filtro/:campo/:valor', controladorCliente.filtro)

rutas.post('/nuevo', controladorCliente.nuevoCliente)

rutas.put('/actualizar/:id', controladorCliente.act)

rutas.delete('/eliminar/:id', controladorCliente.eliminar)

module.exports= rutas
