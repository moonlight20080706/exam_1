const Joi = require("joi");

const validateDelivery_method = (region) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
  });
  return schema.validate(region);
};

module.exports = validateDelivery_method;
