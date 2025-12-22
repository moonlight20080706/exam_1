const express = require("express");
const event = express.Router();
const EventController = require("../controller/event.controller")
const multer = require('multer')



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // kirill harflarni o‘chirib, faqat latin + raqam + "_" qoldiramiz
    const safeName = file.originalname
      .replace(/[^a-zA-Z0-9.]/g, "_"); 

    cb(null, Date.now() + "-" + safeName);
  },
});

const upload = multer({ storage });




/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event managment
 */

event.post("/event",  upload.single("photo") , EventController.createEvent);
/**
 * @swagger
 * /api/event:
 *   post:
 *     tags: [Event]
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):[0-5]\\d$"
 *                 example: "14:30"
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):[0-5]\\d$"
 *                 example: "16:45"
 *               info:
 *                 type : string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               vanue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

event.get("/event", EventController.getEvent);
/**
 * @swagger
 * /api/event:
 *   get:
 *     tags: [Event]
 *     summary: Get all events
 *     responses:
 *       200:
 *         description: List of event
 *       500:
 *         description: Server error
 */




event.get("/event/:id", EventController.getEventById);
/**
 * @swagger
 * /api/event/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */




event.put("/event/:id",  upload.single("photo") , EventController.updateEvent);
/**
 * @swagger
 * /api/event/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update event  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *               start_date:
 *                 type: string
 *                 format: date
 *               start_time:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):[0-5]\\d$"
 *                 example: "16:45"
 *               finish_date:
 *                 type: string
 *                 format: date
 *               finish_time:
 *                 type: string
 *                 pattern: "^([01]\\d|2[0-3]):[0-5]\\d$"
 *                 example: "16:45"
 *               info:
 *                 type : string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               vanue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Event updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/event/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       204:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
event.delete("/event/:id", EventController.deleteEvent);



module.exports = event