module.exports = (sequelize, DataTypes) => {
  const Human_category = sequelize.define("Human_category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finish_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
    },
  });

  Human_category.associate = (models) => {
    Human_category.hasMany(models.Event, {
      foreignKey: "human_category_id",
      as: "event_human_category",
    });
  };

  return Human_category;
};
