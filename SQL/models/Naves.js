const sequelize = require("../config/sequelize")
const {DataTypes} = require("sequelize")

const Naves = sequelize.define("naves" , {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER
})


module.exports = Naves