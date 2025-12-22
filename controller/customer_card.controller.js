const { Customer_card, Customer } = require('../model');
const validateCustomer_Card = require('../validation/customer_card.validation');

// CREATE Customer_card
exports.createCustomer_card = async (req, res) => {
  const { error } = validateCustomer_Card(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const { customer_id } = req.body;

    // ❗ customer_id mavjudligini tekshirish
    const customer = await Customer.findByPk(customer_id);
    if (!customer) {
      return res.status(400).send("Customer with this ID does not exist");
    }

    const customer_card = await Customer_card.create(req.body);
    res.status(201).send(customer_card);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET all
exports.getCustomer_cards = async (req, res) => {
  try {
    const customer_cards = await Customer_card.findAll({
        include: [
            {
                model: Customer,
                as: "customer_card_customer"
            }
        ]
    });
    res.status(200).send(customer_cards);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET by ID
exports.getCustomer_cardById = async (req, res) => {
  try {
    const customer_card = await Customer_card.findByPk(req.params.id,{
        include: [
            {
                model: Customer,
                as: "customer_card_customer"
            }
        ]
    });

    if (!customer_card)
      return res.status(404).send("Customer_card not found");

    res.status(200).send(customer_card);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// UPDATE
exports.updateCustomer_card = async (req, res) => {
  const { error } = validateCustomer_Card(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer_card = await Customer_card.findByPk(req.params.id);
    if (!customer_card)
      return res.status(404).send("Customer_card not found");

    await customer_card.update(req.body);

    res.status(200).send(customer_card);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// DELETE
exports.deleteCustomer_card = async (req, res) => {
  try {
    const customer_card = await Customer_card.findByPk(req.params.id);

    if (!customer_card)
      return res.status(404).send("Customer_card not found");

    const deletedData = customer_card.toJSON();
    await customer_card.destroy();

    res.status(200).send({
      message: "Customer_card deleted successfully",
      deletedCustomer_card: deletedData,
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
