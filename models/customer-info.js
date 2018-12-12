module.exports = function(sequelize, DataTypes) {
  var customerData = sequelize.define(
    "customer_accounts",
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          is: ["^[a-z]+$", "i"],
          notEmpty: true
        }
      },
      middleName: {
        type: DataTypes.STRING,
        validate: {
          is: ["^[a-z]+$", "i"]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          is: ["^[a-z]+$", "i"],
          notEmpty: true
        }
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          len: [6, 12],
          notEmpty: true
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        validate: {
          len: [9, 14],
          notEmpty: true
        }
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          isAlphanumeric: true,
          min: 3,
          notEmpty: true
        }
      }
    },
    {
      timestamps: false
    }
  );
  return customerData;
};
