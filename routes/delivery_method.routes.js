const express = require("express");
const delivery_method = express.Router();
const Delivery_methodController = require("../controller/delivery_method.controller")

/**
 * @swagger
 * tags:
 *   name: Delivery_method
 *   description: Delivery_method managment
 */

delivery_method.post("/delivery_method", Delivery_methodController.createDelivery_method);
/**
 * @swagger
 * /api/delivery_method:
 *   post:
 *     tags: [Delivery_method]
 *     summary: Create a new delivery_method
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
 *         description: Delivery_method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

delivery_method.get("/delivery_method", Delivery_methodController.getDelivery_methods);
/**
 * @swagger
 * /api/delivery_method:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Get all Delivery_methods
 *     responses:
 *       200:
 *         description: List of delivery_method
 *       500:
 *         description: Server error
 */




delivery_method.get("/delivery_method/:id", Delivery_methodController.getDelivery_methodById);
/**
 * @swagger
 * /api/delivery_method/{id}:
 *   get:
 *     tags: [Delivery_method]
 *     summary: Get delivery_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery_method ID
 *     responses:
 *       200:
 *         description: Delivery_method details
 *       404:
 *         description: Delivery_method not found
 *       500:
 *         description: Server error
 */




delivery_method.put("/delivery_method/:id", Delivery_methodController.updateDelivery_method);
/**
 * @swagger
 * /api/delivery_method/{id}:
 *   put:
 *     tags: [Delivery_method]
 *     summary: Update delivery_method  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery_method ID
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
 *         description: Delivery_method updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Delivery_method not found
 *       500:
 *         description: Server error
 */

delivery_method.delete("/delivery_method/:id", Delivery_methodController.deleteDelivery_method);
/**
 * @swagger
 * /api/delivery_method/{id}:
 *   delete:
 *     tags: [Delivery_method]
 *     summary: Delete delivery_method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery_method ID
 *     responses:
 *       204:
 *         description: Delivery_method deleted
 *       404:
 *         description: Delivery_method not found
 *       500:
 *         description: Server error
 */



module.exports = delivery_method