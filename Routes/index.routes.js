module.exports= (app)=> {
    const articuloRoutes= require('./articulo.routes')
    const articuloxCompraRoutes= require('./articuloxCompra.routes')
    const clasesRoutes= require('./clases.routes')
    const clienteRoutes= require('./cliente.routes')
    const compraRoutes= require('./compra.routes')



    app.use('./articulo', articuloRoutes)
    app.use('./articuloxCompra', articuloxCompraRoutes)
    app.use('./clases', clasesRoutes)
    app.use('./cliente', clienteRoutes)
    app.use('./compra', compraRoutes)
};