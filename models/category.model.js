const sequelize = require("../config/db")
const DataTypes = require("sequelize")

const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }
})


module.exports = Category