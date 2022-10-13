const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer', {
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
    eircode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    servicing_HeatPump_Issue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_HeatPump_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_HeatPump_Cosmetic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_HeatPump_Resolved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_HeatPump_PlumberCallout: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_HeatPump_Service: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_HeatPump_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_Issue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_Cosmetic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_Resolved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_PlumberCallout: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_Service: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Stoves_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_Issue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_Cosmetic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_Resolved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_PlumberCallout: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_Service: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Ventilation_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_Issue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_Cosmetic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_Resolved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_PlumberCallout: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_Service: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_Underfloor_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_Issue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_Cosmetic: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_Resolved: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_PlumberCallout: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_Service: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicing_OilandUF_Commission: {
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
    sales_OilandUF_Enquiry: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_OilandUF_PhoneCall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_OilandUF_Survey: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_OilandUF_DepositPaid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_OilandUF_Sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_OilandUF_Delivery: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sales_OilandUF_Commission: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    installers: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer',
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
