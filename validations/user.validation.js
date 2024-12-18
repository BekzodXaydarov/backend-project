const Joi = require("joi");

const UserCreateSchema = Joi.object({
    img: Joi.string().required(),
    userName: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().pattern(/^\+998\d{9}$/)
})

const UserUpdateSchema = Joi.object({
    img: Joi.string().required(),
    userName: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().pattern(/^\+998\d{9}$/)
})

const UserLoginSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = { UserCreateSchema, UserUpdateSchema, UserLoginSchema }