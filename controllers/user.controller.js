const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("../models")

exports.create = async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = await jwt.sign({ id: user.id, password: user.password }, 'userLogin')
        return res.status(200).json({
            success: true,
            message: "token",
            token
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.find = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.status(200).json({
            success: true,
            message: "list of users",
            users
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.findById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User found",
            user
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        await user.update(req.body)
        return res.status(200).json({
            success: true,
            message: "User updated",
            user
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        await user.destroy()
        return res.status(200).json({
            success: true,
            message: "User deleted",
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ where: { userName } })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "UserName or Password invalid"
            })
        }
        
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(401).json({
                success: false,
                message: "UserName or Password invalid"
            })
        }

        const token = await jwt.sign({ id: user.id, password: user.password }, 'userLogin')
        return res.status(200).json({
            success: true,
            message: "token",
            token
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getUserByToken = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[0];
    if (!token) {
        return res.status(401).json({ success: false, message: 'No token provided' });
    }
    try {

        const decoded = await jwt.verify(token, "userLogin");
        const user = await User.findByPk(decoded.id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token or user not found'
            });
        }

        return res.status(200).json({
            success: true,
            user
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}