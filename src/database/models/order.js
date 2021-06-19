'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Order.belongsTo(Payment,{foreignKey:'payment_id'});
      Order.belongsTo(State,{foreignKey:'state_id'});
      Order.belongsTo(User,{foreignKey:'user_id'});
      Order.belongsTo(Address,{through='User'});
      Order.hasOne(Shipping,{foreignKey:'order_id', as:'shippings'})
      Order.hasMany(OrderDetail,{foreignKey:'order_id', as:'orderDetails'});
      
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    shipping_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};