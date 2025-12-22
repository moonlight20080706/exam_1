const {Event_type} = require('../model')
const validateEvent_type = require('../validation/event_type.validation')


exports.createEvent_type = async(req, res ) =>{
    const {error} = validateEvent_type(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const event_type = await Event_type.create(req.body)
            res.status(201).send(event_type)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getEvent_type = async(req , res) =>{
    try {
        const event_type = await Event_type.findAll()
        res.status(200).send(event_type)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getEvent_typeById = async(req , res) =>{
    try {
        const event_type = await Event_type.findByPk(req.params.id)
        if(!event_type) return res.status(404).send("Event_type not found  ")
            res.status(200).send(event_type)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateEventType = async(req , res) =>{
    const {error} = validateEvent_type(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const event_type = await Event_type.findByPk(req.params.id)
            if(!event_type) return res.status(404).send("Event_type not found")
                await event_type.update(req.body)
            res.status(200).send(event_type)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteEvent_type = async (req , res) =>{
    try {
        const event_type = await Event_type.findByPk(req.params.id)
        if(!event_type) return res.status(404).message("Event_type not found")
            const event_typeData = event_type.toJSON()
            await event_type.destroy()
            res.status(200).send({
                message: "Event_type delete successfuly",
                deletedEvent_type: event_typeData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}