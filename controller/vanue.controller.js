const {Vanue, Region, District} = require('../model')
const validateVanue = require('../validation/vanue.validation')


exports.createVanue = async(req, res ) =>{
    const {error} = validateVanue(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const {phone} = req.body
            const isExist = await Vanue.findOne({where: {phone}})
            if(isExist) return res.status(404).send('This phone number is already used')
            const vanue = await Vanue.create(req.body)
            res.status(201).send(vanue)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getVanue = async(req , res) =>{
    try {
        const vanue = await Vanue.findAll({
                include:[
                    {
                        model: Region,
                        as: "vanue_region"
                    },
                    {
                        model: District,
                        as: "vanue_district"
                    }
                ]
            
        })
        res.status(200).send(vanue)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getVanueById = async(req , res) =>{
    try {
        const vanue = await Vanue.findByPk(req.params.id,{
             include:[
                    {
                        model: Region,
                        as: "vanue_region"
                    },
                    {
                        model: District,
                        as: "vanue_district"
                    }
                ]
        })
        if(!vanue) return res.status(404).send("Vanue not found  ")
            res.status(200).send(vanue)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateVanue = async(req , res) =>{
    const {error} = validateVanue(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const vanue = await Vanue.findByPk(req.params.id)
            if(!vanue) return res.status(404).send("Vanue not found")
                await vanue.update(req.body)
            res.status(200).send(vanue)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteVanue = async (req , res) =>{
    try {
        const vanue = await Vanue.findByPk(req.params.id)
        if(!vanue) return res.status(404).message("Vanue not found")
            const vanueData = vanue.toJSON()
            await vanue.destroy()
            res.status(200).send({
                message: "Vanue delete successfuly",
                deletedVanue: vanueData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}