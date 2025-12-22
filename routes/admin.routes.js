const express = require("express");
const admin = express.Router();
const AdminController = require("../controller/admin.controller")

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin managment
 */

admin.post("/admin", AdminController.createAdmin);
/**
 * @swagger
 * /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_Creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

admin.get("/admin", AdminController.getAdmins);
/**
 * @swagger
 * /api/admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all Admins
 *     responses:
 *       200:
 *         description: List of admin
 *       500:
 *         description: Server error
 */




admin.get("/admin/:id", AdminController.getAdminById);
/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */




admin.put("/admin/:id", AdminController.updateAdmin);
/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update admin  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */

admin.delete("/admin/:id", AdminController.deleteAdmin);
/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */



module.exports = admin