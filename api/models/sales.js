const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_Enquiry: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_Survey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_DepositPaid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_Sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_Delivery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_HeatPump_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_Enquiry: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_Survey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_DepositPaid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_Sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_Delivery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Stoves_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_Enquiry: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_Survey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_DepositPaid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_Sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_Delivery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Ventilation_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_Enquiry: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_Survey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_DepositPaid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_Sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_Delivery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_Underfloor_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_Enquiry': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_PhoneCall': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_Survey': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_DepositPaid': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_Sold': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_Delivery': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'sales_Oil&UF_Commission': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sales',
    timestamps: false
  });
};
