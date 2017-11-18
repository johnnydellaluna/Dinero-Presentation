module.exports = function(sequelize, DataTypes) {
  var Expenses = sequelize.define("Expenses", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$",'i'],
        len: [1,30]
      }
    },
    amount_due: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    due_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,20]
      }
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  Expenses.associate = function(models) {
    Expenses.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Expenses;
};