const Joi = require("joi");

const validateRegion = (region) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    login: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(), // kamida 6 belgidan iborat
    is_active: Joi.boolean().required(),
    is_creator: Joi.boolean().required(),
    hashed_refresh_token: Joi.string().required()
  });

  return schema.validate(region);
};

module.exports = validateRegion;
