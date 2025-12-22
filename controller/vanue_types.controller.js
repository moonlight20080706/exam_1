const {Vanue_types, Vanue, Types} = require('../model')
const validateVanue_types = require('../validation/vanue_types.validation')


exports.createVanue_types = async(req, res ) =>{
    const {error} = validateVanue_types(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const vanue_types = await Vanue_types.create(req.body)
            res.status(201).send(vanue_types)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getVanue_types = async(req , res) =>{
    try {
        const vanue_types = await Vanue_types.findAll({
            include:[
                {
                    model: Vanue,
                    as: "vanue_types_vanue"
                },
                {
                    model: Types,
                    as: "vanue_types_types"
                }
            ]
        })
        res.status(200).send(vanue_types)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getVanue_typesById = async(req , res) =>{
    try {
        const vanue_types = await Vanue_types.findByPk(req.params.id,{
            include:[
                {
                    model: Vanue,
                    as: "vanue_types_vanue"
                },
                {
                    model: Types,
                    as: "vanue_types_types"
                }
            ]
        })
        if(!vanue_types) return res.status(404).send("Vanue_types not found  ")
            res.status(200).send(vanue_types)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateVanue_types = async(req , res) =>{
    const {error} = validateVanue_types(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const vanue_types = await Vanue_types.findByPk(req.params.id)
            if(!vanue_types) return res.status(404).send("Vanue_types not found")
                await vanue_types.update(req.body)
            res.status(200).send(vanue_types)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteVanue_types = async (req , res) =>{
    try {
        const vanue_types = await Vanue_types.findByPk(req.params.id)
        if(!vanue_types) return res.status(404).message("Vanue_types not found")
            const vanue_typesData = vanue_types.toJSON()
            await vanue_types.destroy()
            res.status(200).send({
                message: "Vanue_types delete successfuly",
                deletedVanue_types: vanue_typesData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}