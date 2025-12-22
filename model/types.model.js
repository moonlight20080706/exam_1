module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define("Types", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Types.associate = (models) => {
    Types.hasMany(models.Vanue_types, {
      foreignKey: "types_id",
      as: "vanue_types_types",
    });
  };

  return Types;
};
