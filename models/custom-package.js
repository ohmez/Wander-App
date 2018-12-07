module.exports = function(sequelize, DataTypes) {
  var customPackages = sequelize.define(
    "custom_packages",
    {
      location: DataTypes.STRING,
      flight: DataTypes.STRING,
      dateLeaving: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          len: [6, 12],
          notEmpty: true
        }
      },
      dateReturning: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          len: [6, 12],
          notEmpty: true
        }
      },
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
