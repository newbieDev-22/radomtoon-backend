const Joi = require("joi");

const productValidateSchema = {};

productValidateSchema.createProduct = Joi.object({
  productName: Joi.string().required(),
  goal: Joi.number().required(),
  deadline: Joi.date().required(),
  story: Joi.string().required(),
  milestoneDetailList: Joi.array().length(3).required().items(Joi.object()),
});

productValidateSchema.updateProduct = Joi.object({
  productName: Joi.string().allow(null),
  goal: Joi.number().allow(null),
  deadline: Joi.date().allow(null),
  story: Joi.string().allow("", null),
  milestoneDetailList: Joi.array().allow(null),
});

productValidateSchema.failApproval = Joi.object({
  comment: Joi.string().required(),
});

module.exports = productValidateSchema;
