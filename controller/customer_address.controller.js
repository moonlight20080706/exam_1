const { Customer_address, Region, Customer, District } = require("../model");
const validateCustomer_address = require("../validation/customer_address.validation");

exports.createCustomer_address = async (req, res) => {
  const { error } = validateCustomer_address(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customer_address = await Customer_address.create(req.body);
    res.status(201).send(customer_address);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCustomer_address = async (req, res) => {
  try {
    const customer_address = await Customer_address.findAll({
      include: [
        {
          model: Customer,
          as: "customer_address_customer",
        },
        {
          model: Region,
          as: "customer_address_region",
        },
        {
          model: District,
          as: "customer_address_district",
        },
      ],
    });
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCustomer_addressById = async (req, res) => {
  try {
    const customer_address = await Customer_address.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer_address_customer",
        },
        {
          model: Region,
          as: "customer_address_region",
        },
        {
          model: District,
          as: "customer_address_district",
        },
      ],
    });
    if (!customer_address)
      return res.status(404).send("Customer_address not found  ");
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateCustomer_address = async (req, res) => {
  const { error } = validateCustomer_address(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    const customer_address = await Customer_address.findByPk(req.params.id);
    if (!customer_address)
      return res.status(404).send("Customer_address not found");
    await customer_address.update(req.body);
    res.status(200).send(customer_address);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteCustomer_address = async (req, res) => {
  try {
    const customer_address = await Customer_address.findByPk(req.params.id);
    if (!customer_address)
      return res.status(404).message("Customer_address not found");
    const Customer_addresssData = customer_address.toJSON();
    await customer_address.destroy();
    res.status(200).send({
      message: "Customer_address delete successfuly",
      deletedCustomer_address: Customer_addresssData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
