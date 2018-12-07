module.exports = function(sequelize, DataTypes) {
  var customerData = sequelize.define(
    "customer_accounts",
    {
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      birthday: DataTypes.DATE,
      phoneNumber: DataTypes.INTEGER,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return customerData;
};
