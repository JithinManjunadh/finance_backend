const Joi = require('joi');

exports.registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});


exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// create finacneSchema POST
exports.createFinanceSchema = Joi.object({
  amount: Joi.number().positive().required(),
  type: Joi.string().valid('income', 'expense').required(),
  category: Joi.string().min(2).required(),
  date: Joi.date().optional(),
  description: Joi.string().allow('', null)
});

//Update financeSchema PATCH 
exports.updateFinanceSchema = Joi.object({
  amount: Joi.number().positive(),
  type: Joi.string().valid('income', 'expense'),
  category: Joi.string(),
  description: Joi.string().allow('')
});