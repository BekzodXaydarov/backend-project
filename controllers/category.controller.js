const Category = require("../models/category.model")

exports.create = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        return res.status(201).json({
            success: true,
            message: "Category created",
            category
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
        const categories = await Category.findAll()
        return res.status(200).json({
            success: true,
            message: "list of category",
            categories
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
        const category = await Category.findByPk(req.params.id)
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "category not found",
            })
        }
        return res.status(200).json({
            success: true,
            message: "category found",
            category
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
        const category = await Category.findByPk(req.params.id)
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "category not found",
            })
        }
        await category.update(req.body)
        return res.status(200).json({
            success: true,
            message: "category updated",
            category
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
        const category = await Category.findByPk(req.params.id)
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "category not found",
            })
        }
        await category.destroy()
        return res.status(200).json({
            success: true,
            message: "category deleted",
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}