const Design = require("../models/design.model")
const { DesignCreateSchema, DesignUpdateSchema } = require("../validations/design.validation")
const MiddleWare = require("../middleware")
const Category = require("../models/category.model")

exports.create = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const imgUrl = `/uploads/${req.file.filename}`
    MiddleWare.Validation(DesignCreateSchema, { ...req.body, design_img1: imgUrl })
    try {
        const design = await Design.create({ ...req.body, design_img1: imgUrl })
        return res.status(201).json({
            success: true,
            message: "Design created",
            design
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
        const design = await Design.findAll()
        return res.status(200).json({
            success: true,
            message: "List of Designs",
            design
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
        const design = await Design.findByPk(req.params.id,{
            include:[
                {
                    model: Category,
                    as:"category"
                }
            ]
        })
        if (!design) {
            return res.status(404).json({
                succes: false,
                message: "Design not found"
            })
        }
        return res.status(200).json({
            succes: true,
            message: "Design found",
            design
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
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const imgUrl = `/uploads/${req.file.filename}`
    MiddleWare.Validation(DesignUpdateSchema, { ...req.body, design_img1: imgUrl })
    try {
        const design = await Design.findByPk(req.params.id)
        if (!design) {
            return res.status(404).json({
                succes: false,
                message: "Design not found"
            })
        }
        await design.update({...req.body,design_img1:imgUrl})
        return res.status(200).json({
            succes: true,
            message: "Design updated",
            design
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
        const design = await Design.findByPk(req.params.id)
        if (!design) {
            return res.status(404).json({
                succes: false,
                message: "Design not found"
            })
        }
        await design.destroy()
        return res.status(200).json({
            succes: true,
            message: "Design deleted",
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}