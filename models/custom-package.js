module.exports = function(sequelize, DataTypes) {
  var customPackages = sequelize.define(
    "custom_packages",
    {
      location: DataTypes.STRING,
      flight: DataTypes.STRING,
      dateLeaving: DataTypes.DATE,
      dateReturning: DataTypes.DATE,
      hotel: DataTypes.STRING,
      carRental: DataTypes.STRING,
      foodCredit: DataTypes.INTEGER,
      activities: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return customPackages;
};
