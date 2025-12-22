module.exports = (sequelize, DataTypes) => {
  const Customer_addres = sequelize.define("Customer_address", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_index: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Customer_addres.associate = (models) => {
    Customer_addres.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer_address_customer",
    });
    Customer_addres.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "customer_address_region",
    });
    Customer_addres.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "customer_address_district",
    });
  };

  return Customer_addres;
};
