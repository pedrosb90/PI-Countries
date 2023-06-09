const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Activity = sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      countryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  Activity.associate = (models) => {
    Activity.belongsToMany(models.Country, {
      through: "CountryActivities",
      foreignKey: "activityId",
      otherKey: "countryId",
    });
  };

  return Activity;
};
