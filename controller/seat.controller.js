const { Seat, Vanue, Seat_type } = require("../model");
const validateSeat = require("../validation/seat.validation");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getSeats = async (req, res) => {
  try {
    const seat = await Seat.findAll({
      include: [
        {
          model: Vanue,
          as: "seat_vanue",
        },
        {
          model: Seat_type,
          as: "seat_seat_type",
        },
      ],
    });
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        {
          model: Vanue,
          as: "seat_vanue",
        },
        {
          model: Seat_type,
          as: "seat_seat_type",
        },
      ],
    });
    if (!seat) return res.status(404).send("Seat not found  ");
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");
    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).message("Seat not found");
    const seatData = seat.toJSON();
    await seat.destroy();
    res.status(200).send({
      message: "Seat delete successfuly",
      deletedSeat: seatData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
