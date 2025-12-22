const Joi = require("joi");

const validateBooking = (booking) => {
  const schema = Joi.object({
    cart_id: Joi.number().integer().required(),
    finishedAt: Joi.date().optional().allow(null),
    payment_method_id: Joi.number().integer().required(),
    delivery_method_id: Joi.number().integer().required(),
    descount_coupon_id: Joi.number().integer().required(),
    status_id: Joi.number().integer().required(),
  });

  return schema.validate(booking);
};

module.exports = validateBooking;
