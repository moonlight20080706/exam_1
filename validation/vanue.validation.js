const Joi = require("joi");

const validateVanue = (vanue) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    address: Joi.string().required(),
    location: Joi.string().required(),
    site: Joi.string().required(),
    phone: Joi.string().pattern(/^\+998[0-9]{9}$/),
    schema: Joi.string().required(),
    region_id: Joi.number().required(),
    destrict_id: Joi.number().required(),
  });
  return schema.validate(vanue);
};

module.exports = validateVanue;
