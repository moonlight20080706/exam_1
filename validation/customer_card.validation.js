const Joi = require("joi");

const validateCustomer_card = (customer_card) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),

    name: Joi.string().min(3).max(50).required(),

    phone: Joi.string()
      .pattern(/^[0-9+\-() ]{7,20}$/)
      .required(),

    number: Joi.string()
      .creditCard()
      .required(),

    year: Joi.number()
      .integer()
      .min(2024)   // hozirgi yildan kichik bo‘lmaydi
      .max(2050)
      .required(),

    month: Joi.number()
      .integer()
      .min(1)
      .max(12)
      .required(),

    is_active: Joi.boolean().required(),

    is_main: Joi.boolean().required(),
  });

  return schema.validate(customer_card);
};

module.exports = validateCustomer_card;
