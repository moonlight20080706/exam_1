const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Customer.beforeSave(async (customer) => {
    if (customer.changed("password")) {
      customer.password = await bcrypt.hash(customer.password, 10);
    }
  });

  Customer.associate = (models) => {
    Customer.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "customer_lang",
    });
    Customer.hasMany(models.Customer_card, {
      foreignKey: "customer_id",
      as: "customer_customer_card",
    });
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "customer_cart",
    });
    Customer.hasMany(models.Customer_address, {
      foreignKey: "customer_id",
      as: "customer_customer_address",
    });
  };
  return Customer;
};
