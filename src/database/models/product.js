'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(Brand,{foreignKey:'brand_id'});
      Product.belongsTo(Category,{foreignKey:'category_id'});
      Product.belongsTo(Size,{foreignKey:'size_id'});
      Product.belongsTo(Gender,{foreignKey:'gender_id'});
      Product.hasMany(Imagen,{foreignKey:'product_id', as:'imagens'});
      Product.hasOne(OrderDetail,{foreignKey:'product_id', as:'orderDetails'});

    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    gender_id: DataTypes.INTEGER,
    imagen_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};