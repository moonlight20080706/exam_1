const {Cart_item, Ticket, Cart} = require('../model')
const validateCart_item = require('../validation/cart_item.validation')


exports.createCart_item = async(req, res ) =>{
    const {error} = validateCart_item(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const cart_item = await Cart_item.create(req.body)
            res.status(201).send(cart_item)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getCart_items = async(req , res) =>{
    try {
        const cart_item = await Cart_item.findAll({
            include:[
                {
                    model: Ticket,
                    as: "cart_item_ticket"
                },
                {
                    model: Cart,
                    as: "cart_item_cart"
                }
            ]
        })
        res.status(200).send(cart_item)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getCart_itemById = async(req , res) =>{
    try {
        const cart_item = await Cart_item.findByPk(req.params.id, {
            include:[
                {
                    model: Ticket,
                    as: "cart_item_ticket"
                },
                {
                    model: Cart,
                    as: "cart_item_cart"
                }
            ]
        })
        if(!cart_item) return res.status(404).send("Cart_item not found  ")
            res.status(200).send(cart_item)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateCart_item = async(req , res) =>{
    const {error} = validateCart_item(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const cart_item = await Cart_item.findByPk(req.params.id)
            if(!cart_item) return res.status(404).send("Cart_item not found")
                await cart_item.update(req.body)
            res.status(200).send(cart_item)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteCart_item = async (req , res) =>{
    try {
        const cart_item = await Cart_item.findByPk(req.params.id)
        if(!cart_item) return res.status(404).message("Cart_item not found")
            const Cart_itemsData = cart_item.toJSON()
            await cart_item.destroy()
            res.status(200).send({
                message: "Cart_item delete successfuly",
                deletedCart_item: Cart_itemsData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}