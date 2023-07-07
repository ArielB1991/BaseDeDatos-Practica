const {DataTypes}= require('sequelize');

module.exports= (sequelize)=> {
    const cliente= sequelize.define('Cliente',
    {
        nombre:{
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        dni:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    });
return cliente;
};