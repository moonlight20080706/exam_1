const express = require("express");
const vanue_photo = express.Router();
const Vanue_photoController = require("../controller/vanue_photo.controller")
const multer = require('multer')



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // uploads papkasi project root ichida
//   },
//   filename: function (req, file, cb) {
//     // Fayl nomini noyob qilish uchun vaqt qo‘shildi
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });


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
 *   name: Vanue_photo
 *   description: Vanue_photo managment
 */

vanue_photo.post("/vanue_photo",  upload.single("url") , Vanue_photoController.createVanue_photo);
/**
 * @swagger
 * /api/vanue_photo:
 *   post:
 *     tags: [Vanue_photo]
 *     summary: Create a new vanue_photo
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               vanue_id:
 *                 type: number
 *               url:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Vanue_photo created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */

vanue_photo.get("/vanue_photo", Vanue_photoController.getVanue_photo);
/**
 * @swagger
 * /api/vanue_photo:
 *   get:
 *     tags: [Vanue_photo]
 *     summary: Get all vanue photos
 *     responses:
 *       200:
 *         description: List of vanue_photo
 *       500:
 *         description: Server error
 */




vanue_photo.get("/vanue_photo/:id", Vanue_photoController.getVanue_photoById);
/**
 * @swagger
 * /api/vanue_photo/{id}:
 *   get:
 *     tags: [Vanue_photo]
 *     summary: Get vanue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue_photo ID
 *     responses:
 *       200:
 *         description: Vanue_photo details
 *       404:
 *         description: Vanue_photo not found
 *       500:
 *         description: Server error
 */




vanue_photo.put("/vanue_photo/:id",  upload.single("url") , Vanue_photoController.updateVanue_photo);
/**
 * @swagger
 * /api/vanue_photo/{id}:
 *   put:
 *     tags: [Vanue_photo]
 *     summary: Update vanue_photo  by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue_photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               vanue_id:
 *                 type: number
 *               url:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Vanue_photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Vanue_photo not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/vanue_photo/{id}:
 *   delete:
 *     tags: [Vanue_photo]
 *     summary: Delete vanue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Vanue_photo ID
 *     responses:
 *       204:
 *         description: Vanue_photo deleted
 *       404:
 *         description: Vanue_photo not found
 *       500:
 *         description: Server error
 */
vanue_photo.delete("/vanue_photo/:id", Vanue_photoController.deleteVanue_photo);



module.exports = vanue_photo