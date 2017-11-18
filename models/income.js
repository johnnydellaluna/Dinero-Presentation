module.exports = function(sequelize, DataTypes) {
  var Income = sequelize.define("Income", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  Income.associate = function(models) {
    Income.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Income;
};