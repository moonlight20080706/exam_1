const express = require("express");
const customer_address = express.Router();
const customer_addressController = require("../controller/customer_address.controller")

/**
 * @swagger
 * tags:
 *   name: customer_address
 *   description: customer_address managment
 */

customer_address.post("/customer_address", customer_addressController.createCustomer_address);
/**
 * @swagger
 * /api/customer_address:
 *   post:
 *     tags: [customer_address]
 *     summary: Create a new customer_address
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
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: number
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: customer_address created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

customer_address.get("/customer_address", customer_addressController.getCustomer_address);
/**
 * @swagger
 * /api/customer_address:
 *   get:
 *     tags: [customer_address]
 *     summary: Get all customer_addresss
 *     responses:
 *       200:
 *         description: List of customer_address
 *       500:
 *         description: Server error
 */




customer_address.get("/customer_address/:id", customer_addressController.getCustomer_addressById);
/**
 * @swagger
 * /api/customer_address/{id}:
 *   get:
 *     tags: [customer_address]
 *     summary: Get customer_address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: customer_address ID
 *     responses:
 *       200:
 *         description: customer_address details
 *       404:
 *         description: customer_address not found
 *       500:
 *         description: Server error
 */




customer_address.put("/customer_address/:id", customer_addressController.updateCustomer_address);
/**
 * @swagger
 * /api/customer_address/{id}:
 *   put:
 *     tags: [customer_address]
 *     summary: Update customer_address  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: customer_address ID
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
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: number
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: customer_address updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: customer_address not found
 *       500:
 *         description: Server error
 */

customer_address.delete("/customer_address/:id", customer_addressController.deleteCustomer_address);
/**
 * @swagger
 * /api/customer_address/{id}:
 *   delete:
 *     tags: [customer_address]
 *     summary: Delete customer_address by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: customer_address ID
 *     responses:
 *       204:
 *         description: customer_address deleted
 *       404:
 *         description: customer_address not found
 *       500:
 *         description: Server error
 */



module.exports = customer_address