const Joi = require('joi');

const createAccountSchema = Joi.object({
  userId: Joi.number().integer().required(),
  accountTypeId: Joi.number().integer().required(),
  title: Joi.string().max(100).required(),
  initialBalance: Joi.number().precision(2).required()
});

const updateAccountSchema = Joi.object({
  userId: Joi.number().integer().required(),
  accountTypeId: Joi.number().integer().required(),
  title: Joi.string().max(100).required(),
  initialBalance: Joi.number().precision(2).required()
});

const listAccountFiltersSchema = Joi.object({
  account_id: Joi.number().integer(),
  user_id: Joi.number().integer(),
  account_type_id: Joi.number().integer(),
  title: Joi.string().max(100)
});

module.exports = {
  createAccountSchema,
  updateAccountSchema,
  listAccountFiltersSchema
};
