const Joi = require("joi");

const validateDistrict = (district) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    region_id: Joi.number().required()
  });
  return schema.validate(district);
};

module.exports = validateDistrict;
