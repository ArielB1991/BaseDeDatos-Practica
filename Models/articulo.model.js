const {DataTypes}= require ('sequelize');

module.exports= (sequelize)=> {
    const articulo= sequelize.define('articulo',
    {
        identificador:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: false,
        },
        descripcion:{
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    })
return articulo
};