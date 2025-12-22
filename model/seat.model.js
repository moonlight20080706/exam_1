module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sector: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    row_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vanue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location_in_schema: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Vanue, {
      foreignKey: "vanue_id",
      as: "seat_vanue",
    });
    Seat.belongsTo(models.Seat_type, {
      foreignKey: "seat_type_id",
      as: "seat_seat_type",
    });
    Seat.hasMany(models.Ticket, {
      foreignKey: "seat_id",
      as: "seat_ticket",
    });
  };


  return Seat;
};
