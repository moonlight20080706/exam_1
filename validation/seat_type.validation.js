const Joi = require("joi");

const validateSet_type = (seat_type) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(seat_type);
};

module.exports = validateSet_type;
