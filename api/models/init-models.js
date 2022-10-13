var DataTypes = require("sequelize").DataTypes;
var _customer = require("./customer");
var _installers = require("./installers");
var _ticket = require("./ticket");
var _users = require("./users");

function initModels(sequelize) {
  var customer = _customer(sequelize, DataTypes);
  var installers = _installers(sequelize, DataTypes);
  var ticket = _ticket(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  customer.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(customer, { as: "customers", foreignKey: "user_id"});
  ticket.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(ticket, { as: "tickets", foreignKey: "user_id"});

  return {
    customer,
    installers,
    ticket,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
