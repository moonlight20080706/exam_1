const Joi = require("joi");

const validateVanue_types = (vanue_types) => {
  const schema = Joi.object({
    vanue_id: Joi.number().required(),
    types_id: Joi.number().required()
  });
  return schema.validate(vanue_types);
};

module.exports = validateVanue_types;
