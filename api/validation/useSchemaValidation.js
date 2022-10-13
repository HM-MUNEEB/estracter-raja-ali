const joi = require("joi");
const loginUser = joi.object({
  email: joi.string().email(),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")),
});
const registerUser = joi.object({
  account_number: joi.string(),
  address: joi.string(),
  county: joi.string(),
  email: joi.string().email(),
  name: joi.string(),
  // phone: joi.string().pattern(new RegExp("^[0-9-]*$")),
  phone: joi.string(),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")),
});
const addUserValidator = joi.object({
  // account_number: joi.string().pattern(new RegExp("^[0-9-]*$")),
  account_number: joi.string(),
  address: joi.string(),
  county: joi.string(),
  email: joi.string().email(),
  name: joi.string(),
  // phone: joi.string().pattern(new RegExp("^[0-9-]*$")),
  phone: joi.string(),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")),
});
module.exports = { loginUser, registerUser, addUserValidator };
