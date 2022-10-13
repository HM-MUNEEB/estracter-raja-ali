const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticket', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    stage: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_resolved: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_entered: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    stove_hp_type: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ticket',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
