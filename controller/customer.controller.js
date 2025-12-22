const { Customer, Lang } = require("../model");
const validateCustomer = require("../validation/customer.validation");

exports.createCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const { phone, email, hashed_refresh_token } = req.body;
    const isExist = Customer.findOne({
      where: {
        phone,
        email,
        hashed_refresh_token,
      },
    });
    if (isExist)
      return res
        .status(400)
        .send(" this phone or email or token is already created");
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customer = await Customer.findAll({
      include: [
        {
          model: Lang,
          as: "customer_lang",
        },
      ],
    });
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id, {
      include: [
        {
          model: Lang,
          as: "customer_lang",
        },
      ],
    });
    if (!customer) return res.status(404).send("Customer not found  ");
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");
    await customer.update(req.body);
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).message("Customer not found");
    const CustomersData = customer.toJSON();
    await customer.destroy();
    res.status(200).send({
      message: "Customer delete successfuly",
      deletedCustomer: CustomersData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
