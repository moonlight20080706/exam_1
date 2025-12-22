const express = require("express");
const types = express.Router();
const TypesController = require("../controller/types.controller");

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types managment
 */

types.post("/types", TypesController.createTypes);
/**
 * @swagger
 * /api/types:
 *   post:
 *     tags: [Types]
 *     summary: Create a new type
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
 *         description: Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

types.get("/types", TypesController.getTypes);
/**
 * @swagger
 * /api/types:
 *   get:
 *     tags: [Types]
 *     summary: Get all types
 *     responses:
 *       200:
 *         description: List of types
 *       500:
 *         description: Server error
 */




types.get("/types/:id", TypesController.getTypesById);
/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Types]
 *     summary: Get type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type details
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
 */




types.put("/types/:id", TypesController.updateTypes);
/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     tags: [Types]
 *     summary: Update type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
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
 *         description: Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Types]
 *     summary: Delete type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Type ID
 *     responses:
 *       204:
 *         description: Type deleted
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
 */
types.delete("/types/:id", TypesController.deleteTypes);



module.exports = types