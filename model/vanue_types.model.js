module.exports = (sequelize, DataTypes) => {
  const Vanue_types = sequelize.define("Vanue_types", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vanue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    types_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Vanue_types.associate = (models) => {
    Vanue_types.belongsTo(models.Vanue, {
      foreignKey: "vanue_id",
      as: "vanue_types_vanue",
    });

    Vanue_types.belongsTo(models.Types, {
      foreignKey: "types_id",
      as: "vanue_types_types",
    });
  };
  return Vanue_types
};
