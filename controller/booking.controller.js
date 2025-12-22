const {Booking, Cart, Payment_method, Delivey_method} = require('../model')
const validateBooking = require('../validation/booking.validation')


exports.createBooking = async(req, res ) =>{
    const {error} = validateBooking(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const booking = await Booking.create(req.body)
            res.status(201).send(booking)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getBookings = async(req , res) =>{
    try {
        const booking = await Booking.findAll({
            include: [
                {
                    model: Cart,
                    as: "booking_cart_id"
                },
                {
                    model: Payment_method,
                    as: "booking_payment_method_id"
                },
                {
                    model: Delivey_method,
                    as: "booking_delivery_method_id"
                }
            ]
        })
        res.status(200).send(booking)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getBookingById = async(req , res) =>{
    try {
        const booking = await Booking.findByPk(req.params.id,{
             include: [
                {
                    model: Cart,
                    as: "booking_cart_id"
                },
                {
                    model: Payment_method,
                    as: "booking_payment_method_id"
                },
                {
                    model: Delivey_method,
                    as: "booking_delivery_method_id"
                }
            ]
        })
        if(!booking) return res.status(404).send("Booking not found  ")
            res.status(200).send(booking)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateBooking = async(req , res) =>{
    const {error} = validateBooking(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const booking = await Booking.findByPk(req.params.id)
            if(!booking) return res.status(404).send("Booking not found")
                await booking.update(req.body)
            res.status(200).send(booking)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteBooking = async (req , res) =>{
    try {
        const booking = await Booking.findByPk(req.params.id)
        if(!booking) return res.status(404).message("Booking not found")
            const BookingsData = booking.toJSON()
            await booking.destroy()
            res.status(200).send({
                message: "Booking delete successfuly",
                deletedBooking: BookingsData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}