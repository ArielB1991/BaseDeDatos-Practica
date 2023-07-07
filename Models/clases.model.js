const {DataTypes}= require ('sequelize');

module.exports= (Sequelize)=> {
    const clases= Sequelize.define('Clases',{
nombre:{
    type: DataTypes.STRING(1000),
    allowNull: true,
}
});
return clases;
};