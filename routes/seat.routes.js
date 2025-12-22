const express = require("express");
const seat = express.Router();
const seatController = require("../controller/seat.controller")

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat managment
 */

seat.post("/seat", seatController.createSeat);
/**
 * @swagger
 * /api/seat:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               vanue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

seat.get("/seat", seatController.getSeats);
/**
 * @swagger
 * /api/seat:
 *   get:
 *     tags: [Seat]
 *     summary: Get all seats
 *     responses:
 *       200:
 *         description: List of seat
 *       500:
 *         description: Server error
 */




seat.get("/seat/:id", seatController.getSeatById);
/**
 * @swagger
 * /api/seat/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */




seat.put("/seat/:id", seatController.updateSeat);
/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update seat  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               vanue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */

seat.delete("/seat/:id", seatController.deleteSeat);
/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       204:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */



module.exports = seat