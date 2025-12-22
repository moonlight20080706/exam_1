module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      finishedAt: {
        type: DataTypes.DATE,
        allowNull: true, // hali tugamagan bo‘lishi mumkin
      },

      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "cart",
      timestamps: true, // createdAt va updatedAt avtomatik
    }
  );

  Cart.associate = (models) => {
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "cart_customer",
    });
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "cart_booking",
    });
    Cart.hasMany(models.Cart_item, {
      foreignKey: "cart_id",
      as: "cart_cart_item",
    });
    
  };

  return Cart;
};
