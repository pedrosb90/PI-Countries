const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Country = sequelize.define(
    "country",
    {
      countryId: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      area: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );

  Country.associate = (models) => {
    Country.belongsToMany(models.Activity, {
      through: "CountryActivities",
      foreignKey: "countryId",
    });
  };

  return Country;
};
