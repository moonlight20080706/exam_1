module.exports = (sequelize, DataTyoes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTyoes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTyoes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTyoes.INTEGER,
      allowNull: false,
    },
  });

  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "district_region",
    });
    District.hasMany(models.Vanue, {
      foreignKey: "destrict_id",
      as: "vanue_district",
    });
   
  };

  return District;
};
