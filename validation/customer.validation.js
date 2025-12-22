const Joi = require("joi");

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    phone: Joi.string()
      .pattern(/^\+998[0-9]{9}$/)
      .required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required(),
    email: Joi.string().email().required(),
    birth_date: Joi.date().less("now").required(),
    gender: Joi.string().valid("male", "female").required(),
    lang_id: Joi.number().integer().required(),
    hashed_refresh_token: Joi.string().allow(null).optional(),
  });
  return schema.validate(customer);
};

module.exports = validateCustomer;
