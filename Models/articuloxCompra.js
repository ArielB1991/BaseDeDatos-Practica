const {DataTypes}= require ('sequelize');

module.exports= (sequelize)=> {
    const articuloxCompra= sequelize.define('articuloxCompra',
    {
        pU:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
return articuloxCompra
};