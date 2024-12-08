const Joi = require("joi");

const CategoryCreateSchema = Joi.object({
    name: Joi.string().required()
})

const CategoryUpdateSchema = Joi.object({
    name: Joi.string().required()
})

module.exports = { CategoryCreateSchema, CategoryUpdateSchema }