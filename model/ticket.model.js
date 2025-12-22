module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_free: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "ticket_event",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "ticket_seatt",
    });
    Ticket.belongsTo(models.Ticket_status, {
      foreignKey: "ticket_status_id",
      as: "ticket_ticket_status",
    });
    Ticket.hasMany(models.Cart_item, {
      foreignKey: "ticket_id",
      as: "ticket_cart_item",
    });
  };
  return Ticket;
};
