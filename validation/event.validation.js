const Joi = require("joi");

const validateEvent = (event) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_date: Joi.date().required(),
    start_time: Joi.string()
      .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
      .required(),
    finish_date: Joi.date().required(),
    finish_time: Joi.string()
      .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
      .required(),
    info: Joi.string().required(),
    event_type_id: Joi.number().required(),
    human_category_id: Joi.number().required(),
    vanue_id: Joi.number().required(),
    lang_id: Joi.number().required(),
    release_date: Joi.date().required(),
  });
  return schema.validate(event);
};

module.exports = validateEvent;
