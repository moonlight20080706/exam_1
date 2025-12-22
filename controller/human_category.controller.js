const {Human_category} = require('../model')
const validateHuman_category = require('../validation/human_category.validation')


exports.createHuman_category = async(req, res ) =>{
    const {error} = validateHuman_category(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const human_category = await Human_category.create(req.body)
            res.status(201).send(human_category)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getHuman_category = async(req , res) =>{
    try {
        const human_category = await Human_category.findAll()
        res.status(200).send(human_category)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getHuman_categoryById = async(req , res) =>{
    try {
        const human_category = await Human_category.findByPk(req.params.id)
        if(!human_category) return res.status(404).send("Human_category not found  ")
            res.status(200).send(human_category)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateHuman_category = async(req , res) =>{
    const {error} = validateHuman_category(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const human_category = await Human_category.findByPk(req.params.id)
            if(!human_category) return res.status(404).send("Human_category not found")
                await human_category.update(req.body)
            res.status(200).send(human_category)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteHuman_category = async (req , res) =>{
    try {
        const human_category = await Human_category.findByPk(req.params.id)
        if(!human_category) return res.status(404).message("Human_category not found")
            const humanData = human_category.toJSON()
            await human_category.destroy()
            res.status(200).send({
                message: "Human_category delete successfuly",
                deletedHuman: humanData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}