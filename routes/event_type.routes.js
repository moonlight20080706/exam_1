const express = require("express");
const event_type = express.Router();
const Event_TypeController = require("../controller/event_type.controller")

/**
 * @swagger
 * tags:
 *   name: Event_Type
 *   description: Event_Type managment
 */

event_type.post("/event_type", Event_TypeController.createEvent_type);
/**
 * @swagger
 * /api/event_type:
 *   post:
 *     tags: [Event_Type]
 *     summary: Create a new event_type
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
 *         description: Event_Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

event_type.get("/event_type", Event_TypeController.getEvent_type);
/**
 * @swagger
 * /api/event_type:
 *   get:
 *     tags: [Event_Type]
 *     summary: Get all event types
 *     responses:
 *       200:
 *         description: List of event_type
 *       500:
 *         description: Server error
 */




event_type.get("/event_type/:id", Event_TypeController.getEvent_typeById);
/**
 * @swagger
 * /api/event_type/{id}:
 *   get:
 *     tags: [Event_Type]
 *     summary: Get event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_Type ID
 *     responses:
 *       200:
 *         description: Event_Type details
 *       404:
 *         description: Event_Type not found
 *       500:
 *         description: Server error
 */




event_type.put("/event_type/:id", Event_TypeController.updateEventType);
/**
 * @swagger
 * /api/event_type/{id}:
 *   put:
 *     tags: [Event_Type]
 *     summary: Update event_type  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_Type ID
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
 *         description: Event_Type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event_Type not found
 *       500:
 *         description: Server error
 */

event_type.delete("/event_type/:id", Event_TypeController.deleteEvent_type);
/**
 * @swagger
 * /api/event_type/{id}:
 *   delete:
 *     tags: [Event_Type]
 *     summary: Delete event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_Type ID
 *     responses:
 *       204:
 *         description: Event_Type deleted
 *       404:
 *         description: Event_Type not found
 *       500:
 *         description: Server error
 */



module.exports = event_type