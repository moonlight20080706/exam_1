const {Seat_type} = require('../model')
const validateSeat_type = require('../validation/seat_type.validation')


exports.createSeat_type = async(req, res ) =>{
    const {error} = validateSeat_type(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
    const {name} = req.body
    const isExist = await Seat_type.findOne({where:{name}})
    if(isExist) return res.status(400).send('This seat type is already used')
            const seat_type = await Seat_type.create(req.body)
            res.status(201).send(seat_type)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getSeat_Type = async(req , res) =>{
    try {
        const seat_type = await Seat_type.findAll()
        res.status(200).send(seat_type)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getSeat_TypeById = async(req , res) =>{
    try {
        const seat_type = await Seat_type.findByPk(req.params.id)
        if(!seat_type) return res.status(404).send("Seat_type not found  ")
            res.status(200).send(seat_type)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateSeat_Type = async(req , res) =>{
    const {error} = validateSeat_type(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const seat_type = await Seat_type.findByPk(req.params.id)
            if(!seat_type) return res.status(404).send("Seat_type not found")
                await seat_type.update(req.body)
            res.status(200).send(seat_type)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteSeat_Type = async (req , res) =>{
    try {
        const seat_type = await Seat_type.findByPk(req.params.id)
        if(!seat_type) return res.status(404).message("Seat_type not found")
            const seat_TypeData = seat_type.toJSON()
            await seat_type.destroy()
            res.status(200).send({
                message: "Seat_type delete successfuly",
                deletedSeat_Type: seat_TypeData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}