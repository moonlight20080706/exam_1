const Joi = require("joi");

const validateTicket_status = (ticket_status) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
  });
  return schema.validate(ticket_status);
};

module.exports = validateTicket_status;
