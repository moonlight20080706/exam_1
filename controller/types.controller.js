const {Types} = require('../model')
const validateTypes = require('../validation/types.validation')


exports.createTypes = async(req, res ) =>{
    const {error} = validateTypes(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const types = await Types.create(req.body)
            res.status(201).send(types)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getTypes = async(req , res) =>{
    try {
        const types = await Types.findAll()
        res.status(200).send(types)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getTypesById = async(req , res) =>{
    try {
        const types = await Types.findByPk(req.params.id)
        if(!types) return res.status(404).send("Types not found  ")
            res.status(200).send(types)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateTypes = async(req , res) =>{
    const {error} = validateTypes(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const types = await Types.findByPk(req.params.id)
            if(!types) return res.status(404).send("Types not found")
                await types.update(req.body)
            res.status(200).send(types)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteTypes = async (req , res) =>{
    try {
        const types = await Types.findByPk(req.params.id)
        if(!types) return res.status(404).message("Types not found")
            const typesData = types.toJSON()
            await types.destroy()
            res.status(200).send({
                message: "Types delete successfuly",
                deletedTypes: typesData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}