const express = require("express");
const seat_type = express.Router();
const Seat_typeController = require("../controller/seat_type.controller");

/**
 * @swagger
 * tags:
 *   name: Seat_type
 *   description: Seat_type managment
 */

seat_type.post("/seat_type", Seat_typeController.createSeat_type);
/**
 * @swagger
 * /api/seat_type:
 *   post:
 *     tags: [Seat_type]
 *     summary: Create a new seat_type
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
 *         description: Seat_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

seat_type.get("/seat_type", Seat_typeController.getSeat_Type);
/**
 * @swagger
 * /api/seat_type:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get all seat types
 *     responses:
 *       200:
 *         description: List of seat_type
 *       500:
 *         description: Server error
 */

seat_type.get("/seat_type/:id", Seat_typeController.getSeat_TypeById);
/**
 * @swagger
 * /api/seat_type/{id}:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
 *     responses:
 *       200:
 *         description: Seat_type details
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 */

seat_type.put("/seat_type/:id", Seat_typeController.updateSeat_Type);
/**
 * @swagger
 * /api/seat_type/{id}:
 *   put:
 *     tags: [Seat_type]
 *     summary: Update seat_type  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
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
 *         description: Seat_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 */

seat_type.delete("/seat_type/:id", Seat_typeController.deleteSeat_Type);
/**
 * @swagger
 * /api/seat_type/{id}:
 *   delete:
 *     tags: [Seat_type]
 *     summary: Delete seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
 *     responses:
 *       204:
 *         description: Seat_type deleted
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 */

module.exports = seat_type;
