const { Cart, Customer } = require('../model');
const validateCart = require('../validation/cart.validation');

// CREATE CART
exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.create(req.body);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET ALL CARTS
exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      include: [
        {
          model: Customer,
          as: "cart_customer", // ✔ to‘g‘rilandi
        }
      ]
    });
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// GET CART BY ID
exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "cart_customer", // ✔ to‘g‘rilandi
        }
      ]
    });

    if (!cart) return res.status(404).send("Cart not found");

    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// UPDATE CART
exports.updateCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message); // ✔ 404 emas, 400

  try {
    const cart = await Cart.findByPk(req.params.id);

    if (!cart) return res.status(404).send("Cart not found");

    await cart.update(req.body);

    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// DELETE CART
exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);

    if (!cart) return res.status(404).send("Cart not found"); // ✔ to‘g‘rilandi

    const deletedCartData = cart.toJSON();
    await cart.destroy();

    res.status(200).send({
      message: "Cart deleted successfully",
      deletedCart: deletedCartData,
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
