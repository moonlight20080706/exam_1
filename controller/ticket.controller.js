const { Ticket, Event, Seat, Ticket_status } = require("../model");
const validateTicket = require("../validation/ticket_validation");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const ticket = await Ticket.findAll({
      include: [
        {
          model: Event,
          as: "ticket_event",
        },
        {
          model: Seat,
          as: "ticket_seatt",
        },
        {
          model: Ticket_status,
          as: "ticket_ticket_status",
        },
      ],
    });
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          as: "ticket_event",
        },
        {
          model: Seat,
          as: "ticket_seatt",
        },
        {
          model: Ticket_status,
          as: "ticket_ticket_status",
        },
      ],
    });
    if (!ticket) return res.status(404).send("Ticket not found  ");
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");
    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).message("Ticket not found");
    const TicketsData = ticket.toJSON();
    await ticket.destroy();
    res.status(200).send({
      message: "Ticket delete successfuly",
      deletedTicket: TicketsData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
