'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

     Imagen.belongsTo(Product,{foreignKey:'product_id'});

    }
  };
  Imagen.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Imagen',
  });
  return Imagen;
};