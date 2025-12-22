const Joi = require("joi");

const validatePayment_method = (payment_method) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
  });
  return schema.validate(payment_method);
};

module.exports = validatePayment_method;
