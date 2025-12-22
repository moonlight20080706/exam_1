const express = require("express");
const vanue_types = express.Router();
const Vanue_typesController = require("../controller/vanue_types.controller")

/**
 * @swagger
 * tags:
 *   name: Vanue_types
 *   description: Vanue_types managment
 */

vanue_types.post("/vanue_types", Vanue_typesController.createVanue_types);
/**
 * @swagger
 * /api/vanue_types:
 *   post:
 *     tags: [Vanue_types]
 *     summary: Create a new vanue_types
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vanue_id:
 *                 type: number
 *               types_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Vanue_types created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

vanue_types.get("/vanue_types", Vanue_typesController.getVanue_types);
/**
 * @swagger
 * /api/vanue_types:
 *   get:
 *     tags: [Vanue_types]
 *     summary: Get all vanue types
 *     responses:
 *       200:
 *         description: List of vanue_types
 *       500:
 *         description: Server error
 */




vanue_types.get("/vanue_types/:id", Vanue_typesController.getVanue_typesById);
/**
 * @swagger
 * /api/vanue_types/{id}:
 *   get:
 *     tags: [Vanue_types]
 *     summary: Get vanue_types by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue_types ID
 *     responses:
 *       200:
 *         description: Vanue_types details
 *       404:
 *         description: Vanue_types not found
 *       500:
 *         description: Server error
 */




vanue_types.put("/vanue_types/:id", Vanue_typesController.updateVanue_types);
/**
 * @swagger
 * /api/vanue_types/{id}:
 *   put:
 *     tags: [Vanue_types]
 *     summary: Update vanue_types  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue_types ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vanue_id:
 *                 type: number
 *               types_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Vanue_types updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Vanue_types not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/vanue_types/{id}:
 *   delete:
 *     tags: [Vanue_types]
 *     summary: Delete vanue_types by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue_types ID
 *     responses:
 *       204:
 *         description: Vanue_types deleted
 *       404:
 *         description: Vanue_types not found
 *       500:
 *         description: Server error
 */
vanue_types.delete("/vanue_types/:id", Vanue_typesController.deleteVanue_types);



module.exports = vanue_types