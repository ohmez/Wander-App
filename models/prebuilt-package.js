module.exports = function(sequelize, DataTypes) {
  var travelPackages = sequelize.define(
    "travel_packages",
    {
      category: DataTypes.STRING,
      location: DataTypes.STRING,
      flight: DataTypes.STRING,
      dateLeaving: DataTypes.DATEONLY,
      dateReturning: DataTypes.DATEONLY,
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
