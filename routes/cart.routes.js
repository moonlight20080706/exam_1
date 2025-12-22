const express = require("express");
const cart = express.Router();
const CartController = require("../controller/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

// CREATE CART
cart.post("/cart", CartController.createCart);
/**
 * @swagger
 * /api/cart:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

// GET ALL CARTS
cart.get("/cart", CartController.getCarts);
/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all carts
 *     responses:
 *       200:
 *         description: List of carts
 *       500:
 *         description: Server error
 */

// GET CART BY ID
cart.get("/cart/:id", CartController.getCartById);
/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */

// UPDATE CART
cart.put("/cart/:id", CartController.updateCart);
/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */

// DELETE CART
cart.delete("/cart/:id", CartController.deleteCart);
/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cart deleted successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */

module.exports = cart;
