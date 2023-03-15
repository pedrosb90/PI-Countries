const { DataTypes } = require("sequelize");

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
        allowNull: false,
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  Activity.associate = (models) => {
    Activity.belongsTo(models.Country, {
      foreignKey: {
        field: "country_id",
        allowNull: false,
      },
    });
  };

  return Activity;
};
