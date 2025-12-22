module.exports = (sequelize, DataTypes) => {
  const Vanue = sequelize.define("Vanue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schema: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destrict_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Vanue.associate = (models) => {
    Vanue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "vanue_region",
    });
    Vanue.belongsTo(models.District, {
      foreignKey: "destrict_id",
      as: "vanue_district",
    });
    Vanue.hasMany(models.Vanue_types, {
      foreignKey: "vanue_id",
      as: "vanue_types_vanue",
    });
    Vanue.hasMany(models.Vanue_photo, {
      foreignKey: "vanue_id",
      as: "vanue_photo_vanue",
    });
    Vanue.hasMany(models.Event, {
      foreignKey: "vanue_id",
      as: "vanue_event",
    });
    Vanue.hasMany(models.Seat, {
      foreignKey: "vanue_id",
      as: "vanue_seat",
    });
  };
  return Vanue;
};
