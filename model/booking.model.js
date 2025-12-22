module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: true, // hali tugamagan bo‘lishi mumkin
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descount_coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "booking_cart_id",
    });
    Booking.belongsTo(models.Payment_method, {
      foreignKey: "payment_method_id",
      as: "booking_payment_method_id",
    });
    Booking.belongsTo(models.Delivery_method, {
      foreignKey: "delivery_method_id",
      as: "booking_delivery_method_id",
    });
  };
  return Booking;
};
