const Joi = require("joi");

const validateVanue_photo = (vanue_photo) => {
  const schema = Joi.object({
    vanue_id: Joi.number().required(),
  });
  return schema.validate(vanue_photo);
};

module.exports = validateVanue_photo;
