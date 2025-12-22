const express = require("express");
const human_category = express.Router();
const Human_categoryController = require("../controller/human_category.controller");

/**
 * @swagger
 * tags:
 *   name: Human_category
 *   description: Human_category managment
 */

human_category.post(
  "/human_category",
  Human_categoryController.createHuman_category
);
/**
 * @swagger
 * /api/human_category:
 *   post:
 *     tags: [Human_category]
 *     summary: Create a new human
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Human category created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

human_category.get("/human_category", Human_categoryController.getHuman_category);
/**
 * @swagger
 * /api/human_category:
 *   get:
 *     tags: [Human_category]
 *     summary: Get all human_category
 *     responses:
 *       200:
 *         description: List of human_category
 *       500:
 *         description: Server error
 */

human_category.get(
  "/human_category/:id",
  Human_categoryController.getHuman_categoryById
);
/**
 * @swagger
 * /api/human_category/{id}:
 *   get:
 *     tags: [Human_category]
 *     summary: Get human by ID
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

human_category.put("/human_category/:id", Human_categoryController.updateHuman_category);
/**
 * @swagger
 * /api/human_category/{id}:
 *   put:
 *     tags: [Human_category]
 *     summary: Update human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Human updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/human_category/{id}:
 *   delete:
 *     tags: [Human_category]
 *     summary: Delete Human by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human ID
 *     responses:
 *       204:
 *         description: Human deleted
 *       404:
 *         description: Human not found
 *       500:
 *         description: Server error
 */
human_category.delete(
  "/human_category/:id",
  Human_categoryController.deleteHuman_category
);

module.exports = human_category;
