const {Delivey_method} = require('../model')
const validateDelivery_method = require('../validation/delivery_method.validation')


exports.createDelivery_method = async(req, res ) =>{
    const {error} = validateDelivery_method(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const delivery_method = await Delivey_method.create(req.body)
            res.status(201).send(delivery_method)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getDelivery_methods = async(req , res) =>{
    try {
        const delivery_method = await Delivey_method.findAll()
        res.status(200).send(delivery_method)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getDelivery_methodById = async(req , res) =>{
    try {
        const delivery_method = await Delivey_method.findByPk(req.params.id)
        if(!delivery_method) return res.status(404).send("Delivey_method not found  ")
            res.status(200).send(delivery_method)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateDelivery_method = async(req , res) =>{
    const {error} = validateDelivery_method(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const delivery_method = await Delivey_method.findByPk(req.params.id)
            if(!delivery_method) return res.status(404).send("Delivey_method not found")
                await delivery_method.update(req.body)
            res.status(200).send(delivery_method)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteDelivery_method = async (req , res) =>{
    try {
        const delivery_method = await Delivey_method.findByPk(req.params.id)
        if(!delivery_method) return res.status(404).message("Delivey_method not found")
            const Delivery_methodsData = delivery_method.toJSON()
            await delivery_method.destroy()
            res.status(200).send({
                message: "Delivey_method delete successfuly",
                deletedDelivery_method: Delivery_methodsData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}