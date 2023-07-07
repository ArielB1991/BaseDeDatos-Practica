const Sequelize= require('sequelize');

const config= require('../Config/db.config');

const sequelize= new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        port: config.port,
        host: config.host,
        dialect: config.dialect
    }
);

const db= {};

//db(Sequelize, sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//modelos
db.cliente= require('./cliente.model')(sequelize);
db.clases= require('./clases.model')(sequelize);
db.compra= require('./compra.model')(sequelize);
db.articulo= require('./articulo.model')(sequelize);
db.articuloxCompra= require('./articuloxCompra')(sequelize);


//relaciones

db.clases.hasMany(db.articulo);
db.articulo.belongsTo(db.clases);

db.cliente.hasMany(db.compra);
db.compra.belongsTo(db.cliente)

db.compra.hasMany(db.articuloxCompra);
db.articuloxCompra.belongsTo(db.compra);

db.articulo.hasMany(db.articuloxCompra);
db.articuloxCompra.belongsTo(db.articulo);




module.exports= db;


