const Joi = require("joi");

const validateCustomer_address = (customer_address) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required(),
    region_id: Joi.number().required(),
    district_id: Joi.number().required(),
    street: Joi.string().required(),
    house: Joi.string().required(),
    flat: Joi.number().required(),
    location: Joi.string().required(),
    post_index: Joi.number().required(),
    info: Joi.string().required(),
  });
  return schema.validate(customer_address);
};

module.exports = validateCustomer_address;
