const Joi = require("joi");

const validateCart = (cart) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    finishedAt: Joi.date().allow(null),
    status_id: Joi.number().integer().required(),
  });

  return schema.validate(cart);
};

module.exports = validateCart;
