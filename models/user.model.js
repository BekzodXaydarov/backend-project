const sequelize = require("../config/db")
const bcrypt = require("bcrypt")
const DataType = require("sequelize")

const User = sequelize.define("user", {
    id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    img: {
        type: DataType.STRING,
    },
    userName: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataType.STRING,
        allowNull: false
    },
    lastName: {
        type: DataType.STRING,
        allowNull: false
    },
    password: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataType.STRING,
        allowNull: false
    }
})

User.beforeSave(async (admin) => {
    if (admin.changed("password")) {
        admin.password = await bcrypt.hash(admin.password, 10)
    }
})

module.exports = User