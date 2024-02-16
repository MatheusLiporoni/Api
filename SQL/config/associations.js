const Planet = require("../models/planet")
const Satelite = require("../models/satelites")
const Pilot = require("../models/Pilots")
const Naves = require("../models/Naves")



Planet.hasOne(Satelite, {onDelete: 'CASCADE' , onUpdate: "CASCADE"});
/*Planet.hasMany(Satelite, {onDelete: 'CASCADE' , onUpdate: "CASCADE"});*/
Satelite.belongsTo(Planet,{foreignKey: "planetId" , as: "planet"})

Pilot.belongsToMany(Naves , {
    foreignKey: "pilotid",
    through:"navespilots",
    as:"naves"

})

Naves.belongsToMany(Pilot ,{
    foreignKey: "navesid",
    through: "navespilots",
    as:"pilotos"
})


module.exports = {Planet,Satelite}