const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_creator: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Admin.beforeSave(async (admin) => {
    if (admin.changed("password")) {
      admin.password = await bcrypt.hash(admin.password, 10);
    }
  });

  return Admin;
};
