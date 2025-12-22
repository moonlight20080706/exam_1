const express = require("express");
const region = express.Router();
const RegionController = require("../controller/region.controller")

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region managment
 */

region.post("/region", RegionController.createRegion);
/**
 * @swagger
 * /api/region:
 *   post:
 *     tags: [Region]
 *     summary: Create a new region
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
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

region.get("/region", RegionController.getRegions);
/**
 * @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Get all regions
 *     responses:
 *       200:
 *         description: List of region
 *       500:
 *         description: Server error
 */




region.get("/region/:id", RegionController.getRegionById);
/**
 * @swagger
 * /api/region/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */




region.put("/region/:id", RegionController.updateRegion);
/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update region  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
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
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */

region.delete("/region/:id", RegionController.deleteRegion);
/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       204:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */



module.exports = region