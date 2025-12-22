module.exports = (sequelize, DataTypes) => {
  const Seat_type = sequelize.define("Seat_type", {
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

  Seat_type.associate = (models) => {
    Seat_type.hasMany(models.Seat, {
      foreignKey: "seat_type_id",
      as: "seat_type_seat",
    });
  };
  return Seat_type;
};
