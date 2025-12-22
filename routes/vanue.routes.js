const express = require("express");
const vanue = express.Router();
const vanueController = require("../controller/vanue.controller")

/**
 * @swagger
 * tags:
 *   name: Vanue
 *   description: Vanue managment
 */

vanue.post("/vanue", vanueController.createVanue);
/**
 * @swagger
 * /api/vanue:
 *   post:
 *     tags: [Vanue]
 *     summary: Create a new vanue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               destrict_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Vanue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

vanue.get("/vanue", vanueController.getVanue);
/**
 * @swagger
 * /api/vanue:
 *   get:
 *     tags: [Vanue]
 *     summary: Get all vanue
 *     responses:
 *       200:
 *         description: List of vanue
 *       500:
 *         description: Server error
 */




vanue.get("/vanue/:id", vanueController.getVanueById);
/**
 * @swagger
 * /api/vanue/{id}:
 *   get:
 *     tags: [Vanue]
 *     summary: Get vanue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue ID
 *     responses:
 *       200:
 *         description: Vanue details
 *       404:
 *         description: Vanue not found
 *       500:
 *         description: Server error
 */




vanue.put("/vanue/:id", vanueController.updateVanue);
/**
 * @swagger
 * /api/vanue/{id}:
 *   put:
 *     tags: [Vanue]
 *     summary: Update vanue  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               destrict_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Vanue updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Vanue not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/vanue/{id}:
 *   delete:
 *     tags: [Vanue]
 *     summary: Delete vanue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue ID
 *     responses:
 *       204:
 *         description: Vanue deleted
 *       404:
 *         description: Vanue not found
 *       500:
 *         description: Server error
 */
vanue.delete("/vanue/:id", vanueController.deleteVanue);



module.exports = vanue