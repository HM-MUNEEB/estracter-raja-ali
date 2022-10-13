const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicing_sales', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ticket_by: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    job_for: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    'ref/installer': {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    customer: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eircode: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    additional_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    'stove/hp_type': {
      type: DataTypes.TEXT,
      allowNull: false
    },
    'date_res/date': {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    install_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fault_code: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    's/n1': {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    's/n2': {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    mrpn: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    invoice_no: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'servicing_sales',
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
