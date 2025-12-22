const express = require("express");
const payment_method = express.Router();
const Payment_methodController = require("../controller/payment_method.controller")

/**
 * @swagger
 * tags:
 *   name: Payment_method
 *   description: Payment_method managment
 */

payment_method.post("/payment_method", Payment_methodController.createPayment_method);
/**
 * @swagger
 * /api/payment_method:
 *   post:
 *     tags: [Payment_method]
 *     summary: Create a new payment_method
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment_method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

payment_method.get("/payment_method", Payment_methodController.getPayment_methods);
/**
 * @swagger
 * /api/payment_method:
 *   get:
 *     tags: [Payment_method]
 *     summary: Get all Payment_methods
 *     responses:
 *       200:
 *         description: List of payment_method
 *       500:
 *         description: Server error
 */




payment_method.get("/payment_method/:id", Payment_methodController.getPayment_methodById);
/**
 * @swagger
 * /api/payment_method/{id}:
 *   get:
 *     tags: [Payment_method]
 *     summary: Get payment_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment_method ID
 *     responses:
 *       200:
 *         description: Payment_method details
 *       404:
 *         description: Payment_method not found
 *       500:
 *         description: Server error
 */




payment_method.put("/payment_method/:id", Payment_methodController.updatePayment_method);
/**
 * @swagger
 * /api/payment_method/{id}:
 *   put:
 *     tags: [Payment_method]
 *     summary: Update payment_method  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment_method ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment_method updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment_method not found
 *       500:
 *         description: Server error
 */

payment_method.delete("/payment_method/:id", Payment_methodController.deletePayment_method);
/**
 * @swagger
 * /api/payment_method/{id}:
 *   delete:
 *     tags: [Payment_method]
 *     summary: Delete payment_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment_method ID
 *     responses:
 *       204:
 *         description: Payment_method deleted
 *       404:
 *         description: Payment_method not found
 *       500:
 *         description: Server error
 */



module.exports = payment_method