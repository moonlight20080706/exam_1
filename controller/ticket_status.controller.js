const {Ticket_status} = require('../model')
const validateTicket_status = require('../validation/ticket_status.validation')


exports.createTicket_status = async(req, res ) =>{
    const {error} = validateTicket_status(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const ticket_status = await Ticket_status.create(req.body)
            res.status(201).send(ticket_status)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getTicket_status = async(req , res) =>{
    try {
        const ticket_status = await Ticket_status.findAll()
        res.status(200).send(ticket_status)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getTicket_statusById = async(req , res) =>{
    try {
        const ticket_status = await Ticket_status.findByPk(req.params.id)
        if(!ticket_status) return res.status(404).send("Ticket_status not found  ")
            res.status(200).send(ticket_status)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateTicket_status = async(req , res) =>{
    const {error} = validateTicket_status(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const ticket_status = await Ticket_status.findByPk(req.params.id)
            if(!ticket_status) return res.status(404).send("Ticket_status not found")
                await ticket_status.update(req.body)
            res.status(200).send(ticket_status)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteTicket_status = async (req , res) =>{
    try {
        const ticket_status = await Ticket_status.findByPk(req.params.id)
        if(!ticket_status) return res.status(404).message("Ticket_status not found")
            const ticket_statusData = ticket_status.toJSON()
            await ticket_status.destroy()
            res.status(200).send({
                message: "Ticket_status delete successfuly",
                deletedTicket_Status: ticket_statusData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}