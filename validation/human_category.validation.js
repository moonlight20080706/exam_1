const Joi = require("joi");

const validateHuman_category = (human_category) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    start_age: Joi.number().required(),
    finish_age: Joi.number().required(),
    gender: Joi.string().required().valid('male', "female"),

  });
  return schema.validate(human_category);
};

module.exports = validateHuman_category;
