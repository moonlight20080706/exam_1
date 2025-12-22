module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    human_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vanue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.Event_type, {
      foreignKey: "event_type_id",
      as: "event_type_event",
    });
    Event.belongsTo(models.Human_category, {
      foreignKey: "human_category_id",
      as: "event_human_category",
    });
    Event.belongsTo(models.Vanue, {
      foreignKey: "vanue_id",
      as: "event_vanue",
    });
    Event.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "event_lang",
    });
    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "event_ticket",
    });
  };
  return Event
};
