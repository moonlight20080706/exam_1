const express = require("express");
const customer_card = express.Router();
const Customer_cardController = require("../controller/customer_card.controller")

/**
 * @swagger
 * tags:
 *   name: Customer_Card
 *   description: Customer_Card managment
 */

customer_card.post("/customer_card", Customer_cardController.createCustomer_card);
/**
 * @swagger
 * /api/customer_card:
 *   post:
 *     tags: [Customer_Card]
 *     summary: Create a new customer_card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Customer_Card created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

customer_card.get("/customer_card", Customer_cardController.getCustomer_cards);
/**
 * @swagger
 * /api/customer_card:
 *   get:
 *     tags: [Customer_Card]
 *     summary: Get all s
 *     responses:
 *       200:
 *         description: List of customer_card
 *       500:
 *         description: Server error
 */




customer_card.get("/customer_card/:id", Customer_cardController.getCustomer_cardById);
/**
 * @swagger
 * /api/customer_card/{id}:
 *   get:
 *     tags: [Customer_Card]
 *     summary: Get customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_Card ID
 *     responses:
 *       200:
 *         description: Customer_Card details
 *       404:
 *         description: Customer_Card not found
 *       500:
 *         description: Server error
 */




customer_card.put("/customer_card/:id", Customer_cardController.updateCustomer_card);
/**
 * @swagger
 * /api/customer_card/{id}:
 *   put:
 *     tags: [Customer_Card]
 *     summary: Update customer_card  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_Card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Customer_Card updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer_Card not found
 *       500:
 *         description: Server error
 */

customer_card.delete("/customer_card/:id", Customer_cardController.deleteCustomer_card);
/**
 * @swagger
 * /api/customer_card/{id}:
 *   delete:
 *     tags: [Customer_Card]
 *     summary: Delete customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_Card ID
 *     responses:
 *       204:
 *         description: Customer_Card deleted
 *       404:
 *         description: Customer_Card not found
 *       500:
 *         description: Server error
 */



module.exports = customer_card