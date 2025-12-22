const {Lang} = require('../model')
const validateLang = require('../validation/lang.validation')

exports.createLang = async(req , res) =>{
    const {error} = validateLang(req.body)
    if(error) return res.status(400).send(error.details[0].message)
        try {
            const lang = await Lang.create(req.body)
            res.status(201).send(lang)
        } catch (error) {
            res.status(500).send({message:error.message})
        }
}


exports.getLang = async(req , res) =>{
    try {
        const lang = await Lang.findAll()
        res.status(200).send(lang)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getLangById = async(req , res) =>{
    try {
        const lang = await Lang.findByPk(req.params.id)
        if(!lang) return res.status(404).send("Lang not found  ")
            res.status(200).send(lang)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateLang = async(req , res) =>{
    const {error} = validateLang(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const lang = await Lang.findByPk(req.params.id)
            if(!lang) return res.status(404).send("Lang not found")
                await lang.update(req.body)
            res.status(200).send(lang)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteLang = async (req , res) =>{
    try {
        const lang = await Lang.findByPk(req.params.id)
        if(!lang) return res.status(404).message("Lang not found")
            const langData = lang.toJSON()
            await lang.destroy()
            res.status(200).send({
                message: "Lang delete successfuly",
                deletedTypes: langData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}