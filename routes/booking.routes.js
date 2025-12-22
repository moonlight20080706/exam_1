const express = require("express");
const booking = express.Router();
const BookingController = require("../controller/booking.controller");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

// CREATE Booking
booking.post("/booking", BookingController.createBooking);
/**
 * @swagger
 * /api/booking:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *                 format: date-time
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               descount_coupon_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

// GET all Bookings
booking.get("/booking", BookingController.getBookings);
/**
 * @swagger
 * /api/booking:
 *   get:
 *     tags: [Booking]
 *     summary: Get all bookings
 *     responses:
 *       200:
 *         description: List of bookings
 *       500:
 *         description: Server error
 */

// GET Booking by ID
booking.get("/booking/:id", BookingController.getBookingById);
/**
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */

// UPDATE Booking
booking.put("/booking/:id", BookingController.updateBooking);
/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *                 format: date-time
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               descount_coupon_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Booking updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */

// DELETE Booking
booking.delete("/booking/:id", BookingController.deleteBooking);
/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */

module.exports = booking;
