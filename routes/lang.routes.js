const express = require("express");
const lang = express.Router();
const LangController = require("../controller/lang.controller");

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: Lang managment
 */

lang.post("/lang", LangController.createLang);
/**
 * @swagger
 * /api/lang:
 *   post:
 *     tags: [Lang]
 *     summary: Create a new lang
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
 *         description: Lang created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

lang.get("/lang", LangController.getLang);
/**
 * @swagger
 * /api/lang:
 *   get:
 *     tags: [Lang]
 *     summary: Get all lang
 *     responses:
 *       200:
 *         description: List of lang
 *       500:
 *         description: Server error
 */




lang.get("/lang/:id", LangController.getLangById);
/**
 * @swagger
 * /api/lang/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: Get lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Lang details
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */




lang.put("/lang/:id", LangController.updateLang);
/**
 * @swagger
 * /api/lang/{id}:
 *   put:
 *     tags: [Lang]
 *     summary: Update lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
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
 *         description: Lang updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/lang/{id}:
 *   delete:
 *     tags: [Lang]
 *     summary: Delete type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       204:
 *         description: Lang deleted
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
lang.delete("/lang/:id", LangController.deleteLang);



module.exports = lang