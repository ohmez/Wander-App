module.exports = function(sequelize, DataTypes) {
  var travelPackages = sequelize.define(
    "travel_packages",
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
  return travelPackages;
};
