const sequelize = require("../config/db")
const DataTypes = require("sequelize")

const Design = sequelize.define("design", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    design_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    design_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    design_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "categories",
            as: "id"
        }
    },
    design_img1: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Design