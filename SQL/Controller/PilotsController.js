const Pilots = require("../models/Pilots") 

module.exports = {
    store: async (req , res) => {
        const {name , birthday} = req.body
        const pilot = await Pilots.create({name, birthday})
        return res.json(pilot)
    },

    get: async (req, res) => {
        const pilot = await Pilots.findAll()
        return res.json(pilot)
    },

    delete: async (req , res) => {
        await Pilots.destroy({
            where:{
                id: req.params.id
            }           
        })
        return res.send("Piloto destruido")
    }

}