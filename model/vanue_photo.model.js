module.exports = (sequelize, DataTypes) => {
  const Vanue_photo = sequelize.define("Vanue_photo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vanue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Vanue_photo.associate = (models) => {
    Vanue_photo.belongsTo(models.Vanue, {
      foreignKey: "vanue_id",
      as: "vanue_photo_vanue",
    });
  };

  return Vanue_photo;
};
