const Joi = require("joi");

const DesignCreateSchema = Joi.object({
    design_name: Joi.string().required(),
    design_description: Joi.string().required(),
    design_price: Joi.number().required(),
    design_category: Joi.number().required(),
    design_img1: Joi.string().required()
})

const DesignUpdateSchema = Joi.object({
    design_name: Joi.string().required(),
    design_description: Joi.string().required(),
    design_price: Joi.number().required(),
    design_category: Joi.number().required(),
    design_img1: Joi.string().required()
})

module.exports = {DesignCreateSchema,DesignUpdateSchema}