const sequelize = require("../config/sequelize")
const {DataTypes} = require("sequelize")

const Pilot = sequelize.define("pilotos" , {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
})


module.exports = Pilot
