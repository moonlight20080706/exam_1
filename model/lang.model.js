module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define("Lang", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Lang.associate = (models) => {
    Lang.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "event_lang",
    });
    Lang.hasMany(models.Customer, {
      foreignKey: "lang_id",
      as: "lang_customer",
    });
  };

  return Lang;
};
