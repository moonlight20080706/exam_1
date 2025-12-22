const {Admin} = require('../model')
const validateAdmin = require('../validation/admin.validation')


exports.createAdmin = async(req, res ) =>{
    const {error} = validateAdmin(req.body)
    if (error) return res.status(400).send(error.details[0].message)
        try {
            const admin = await Admin.create(req.body)
            res.status(201).send(admin)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}


exports.getAdmins = async(req , res) =>{
    try {
        const admin = await Admin.findAll()
        res.status(200).send(admin)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getAdminById = async(req , res) =>{
    try {
        const admin = await Admin.findByPk(req.params.id)
        if(!admin) return res.status(404).send("Admin not found  ")
            res.status(200).send(admin)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.updateAdmin = async(req , res) =>{
    const {error} = validateAdmin(req.body)
    if(error) return res.status(404).send(error.details[0].message)
        try {
            const admin = await Admin.findByPk(req.params.id)
            if(!admin) return res.status(404).send("Admin not found")
                await admin.update(req.body)
            res.status(200).send(admin)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
}

exports.deleteAdmin = async (req , res) =>{
    try {
        const admin = await Admin.findByPk(req.params.id)
        if(!admin) return res.status(404).message("Admin not found")
            const AdminsData = admin.toJSON()
            await admin.destroy()
            res.status(200).send({
                message: "Admin delete successfuly",
                deletedAdmin: AdminsData
            })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}