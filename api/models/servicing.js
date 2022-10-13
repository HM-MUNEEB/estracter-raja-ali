const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicing', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
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
    'servicing_Oil&UF_Issue': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'servicing_Oil&UF_PhoneCall': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'servicing_Oil&UF_Cosmetic': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'servicing_Oil&UF_Resolved': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'servicing_Oil&UF_PlumberCallout': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'servicing_Oil&UF_Service': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'servicing_Oil&UF_Commission': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'servicing',
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
    ]
  });
};
