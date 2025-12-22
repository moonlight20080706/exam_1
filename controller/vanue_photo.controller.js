const { Vanue_photo, Vanue } = require("../model");
const validateVanue_photo = require("../validation/vanue_photo.validation");

exports.createVanue_photo = async (req, res) => {
  const { error } = validateVanue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (!req.file) return res.status(404).send({ message: "no img" });

  try {
    const vanue_photo = await Vanue_photo.create({
      vanue_id: req.body.vanue_id,
      url: req.file ? `/uploads/${req.file.filename}` : null,
    });
    res.status(201).send(vanue_photo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getVanue_photo = async (req, res) => {
  try {
    const vanue_photo = await Vanue_photo.findAll({
      include: [
        {
          model : Vanue,
          as : "vanue_photo_vanue"
        }
      ]
    });
    res.status(200).send(vanue_photo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getVanue_photoById = async (req, res) => {
  try {
    const vanue_photo = await Vanue_photo.findByPk(req.params.id,{
       include: [
        {
          model : Vanue,
          as : "vanue_photo_vanue"
        }
      ]
    });
    if (!vanue_photo) return res.status(404).send("Vanue_photo not found  ");
    res.status(200).send(vanue_photo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// exports.updateVanue_photo = async (req, res) => {
//   const { error } = validateVanue_photo(req.body);
//   if (error) return res.status(404).send(error.details[0].message);
//   try {
//     const vanue_photo = await Vanue_photo.findByPk(req.params.id);

//     if (req.file) {
//       vanue_photo.url = `/uploads/${req.file.filename}`;
//     }
//     if (!vanue_photo) return res.status(404).send("Vanue_photo not found");
//     await vanue_photo.update(req.body);
//     res.status(200).send(vanue_photo);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };


exports.updateVanue_photo = async (req, res) => {
    const { error } = validateVanue_photo(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const vanue_photo = await Vanue_photo.findByPk(req.params.id);

        if (!vanue_photo) {
            return res.status(404).send("Vanue_photo not found");
        }

        // 1) Text maydonlarini yangilash
        await vanue_photo.update(req.body);

        // 2) Rasm bo‘lsa — alohida yozamiz (req.body ni o‘chirib yubormasin)
        if (req.file) {
            vanue_photo.url = `/uploads/${req.file.filename}`;
            await vanue_photo.save(); // Bu update qiladi
        }

        res.status(200).send(vanue_photo);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteVanue_photo = async (req, res) => {
  try {
    const vanue_photo = await Vanue_photo.findByPk(req.params.id);
    if (!vanue_photo) return res.status(404).message("Vanue_photo not found");
    const Vanue_photoData = vanue_photo.toJSON();
    await vanue_photo.destroy();
    res.status(200).send({
      message: "Vanue_photo delete successfuly",
      deletedVanue_photo: Vanue_photoData,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
