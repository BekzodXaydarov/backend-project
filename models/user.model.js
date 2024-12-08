const sequelize = require("../config/db")
const DataType = require("sequelize")
const bcrypt = require("bcrypt")

const User = sequelize.define("user", {
    id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
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
    email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
    }
})

User.beforeSave(async (admin) => {
    if (admin.changed("password")) {
        admin.password = await bcrypt.hash(admin.password, 10)
    }
})

module.exports = User