const Joi = require("joi");

const UserCreateSchema = Joi.object({
    userName: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
})

const UserUpdateSchema = Joi.object({
    userName: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
})

const UserLoginSchema = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = { UserCreateSchema, UserUpdateSchema, UserLoginSchema }