const joi = require("joi");
const loginUser = joi.object({
  email: joi.string().email(),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")),
});
const registerUser = joi.object({
  name: joi.string().min(3),
  email: joi.string().email(),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")),
});
const addUserValidator = joi.object({
  account_number: joi.string().pattern(new RegExp("^[0-9-]*$")),
  address: joi.string(),
  county: joi.string(),
  email: joi.string().email(),
  name: joi.string(),
  phone: joi.string().pattern(new RegExp("^[0-9-]*$")),
  password: joi
    .string()
    .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$")),
});
module.exports = { loginUser, registerUser, addUserValidator };
