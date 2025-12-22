const express = require("express");
const ticket = express.Router();
const TicketController = require("../controller/ticket.controller")

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket managment
 */

ticket.post("/ticket", TicketController.createTicket)
/**
 * @swagger
 * /api/ticket:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_free:
 *                 type: number
 *               ticket_status_id:
 *                 type: number
 *               ticket_type:
 *                 type: number
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

ticket.get("/ticket", TicketController.getTickets);
/**
 * @swagger
 * /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all TcreateTicket
 *     responses:
 *       200:
 *         description: List of ticket
 *       500:
 *         description: Server error
 */




ticket.get("/ticket/:id", TicketController.getTicketById);
/**
 * @swagger
 * /api/ticket/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */




ticket.put("/ticket/:id", TicketController.updateTicket)
/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update ticket  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: number
 *               service_free:
 *                 type: number
 *               ticket_status_id:
 *                 type: number
 *               ticket_type:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */

ticket.delete("/ticket/:id", TicketController.deleteTicket)
/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */



module.exports = ticket