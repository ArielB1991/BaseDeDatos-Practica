const {DataTypes, Sequelize}= require ('sequelize');

module.exports= (Sequelize)=> {
    const compra= Sequelize.define('compra',
    {
        total:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return compra
};