const Naves = require("../models/Naves")
const Pilot = require("../models/Pilots")


module.exports = {
    store: async (req , res) => {
        const {capId} = req.params
        const {name , capacity} = req.body
        const pilot = await Pilot.findByPk(capId)

        if (!pilot){
            return res.send("Não existe esse piloto!!!!")
        }
        const [naves]=  await Naves.findOrCreate({
            where: {name , capacity}
        })
        await pilot.addNaves(naves)

        return res.send("Nave Adicionada")
    },

    get: async (req, res) => {
        const {capId} = req.params

        const cap = await Pilot.findByPk(capId , {
            include: {association: "naves"}
        })

        return res.json(cap)


    }
    
}