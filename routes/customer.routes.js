const express = require("express");
const customer = express.Router();
const CustomerController = require("../controller/customer.controller")

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: customer managment
 */

customer.post("/customer", CustomerController.createCustomer);
/**
 * @swagger
 * /api/customer:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [male , female] 
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

customer.get("/customer", CustomerController.getCustomers);
/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all Customers
 *     responses:
 *       200:
 *         description: List of customer
 *       500:
 *         description: Server error
 */




customer.get("/customer/:id", CustomerController.getCustomerById);
/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: customer ID
 *     responses:
 *       200:
 *         description: customer details
 *       404:
 *         description: customer not found
 *       500:
 *         description: Server error
 */




customer.put("/customer/:id", CustomerController.updateCustomer);
/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update customer  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *                 enum: [male , female] 
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: customer updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: customer not found
 *       500:
 *         description: Server error
 */

customer.delete("/customer/:id", CustomerController.deleteCustomer);
/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: customer ID
 *     responses:
 *       204:
 *         description: customer deleted
 *       404:
 *         description: customer not found
 *       500:
 *         description: Server error
 */



module.exports = customer