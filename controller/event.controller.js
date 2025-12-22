const {Event, Event_type, Human_category, Vanue, Lang} = require('../model')
const validateEvent = require('../validation/event.validation')


exports.createEvent = async(req, res ) =>{
     const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (!req.file) return res.status(404).send({ message: "no img" });

  try {
    const event = await Event.create({
        name: req.body.name ,
        photo: req.file ? `/uploads/${req.file.filename}` : null,
        start_date: req.body.start_date,
        start_time: req.body.start_time ,
        finish_date: req.body.finish_date ,
        finish_time: req.body.finish_time ,
        info: req.body.info ,
        event_type_id: req.body.event_type_id ,
        human_category_id: req.body.human_category_id ,
        vanue_id: req.body.vanue_id ,
        lang_id: req.body.lang_id ,
        release_date: req.body.release_date ,


    });
    res.status(201).send(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}


exports.getEvent = async(req , res) =>{
    try {
        const event = await Event.findAll()
        res.status(200).send(event)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getEventById = async(req , res) =>{
    try {
        const event = await Event.findByPk(req.params.id)
        if(!event) return res.status(404).send("Event not found  ")
            res.status(200).send(event)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}


exports.updateEvent = async (req, res) => {
    const { error } = validateEvent(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const event = await Event.findByPk(req.params.id);

        if (!event) {
            return res.status(404).send("Event not found");
        }

        // 1) Text maydonlarini yangilash
        await event.update(req.body);

        // 2) Rasm bo‘lsa — alohida yozamiz (req.body ni o‘chirib yubormasin)
        if (req.file) {
            event.photo = `/uploads/${req.file.filename}`;
            await event.save(); // Bu update qiladi
        }

        res.status(200).send(event);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteEvent = async (req , res) =>{
    try {
        const event = await Event.findByPk(req.params.id)
        if(!event) return res.status(404).message("Event not found")
            const eventData = event.toJSON()
            await event.destroy()
            res.status(200).send({
                message: "Event delete successfuly",
                deletedEvent: eventData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}