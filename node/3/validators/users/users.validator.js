const Joi = require('joi');

const { PASSWORD, EMAIL } = require('../../constants/regexp');

module.exports = Joi.object(
    {
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(100)
            .required(),
        email: Joi.string()
            .regex(EMAIL)
            .required(),
        age: Joi.number()
            .integer()
            .min(18)
            .max(100)
            .required(),
        password: Joi.string()
            .regex(PASSWORD)
            .required(),
        newEmail: Joi.string()
            .regex(EMAIL),
        newAge: Joi.number()
            .integer()
            .min(18)
            .max(100),
        newPassword: Joi.string()
            .regex(PASSWORD),
    }
);
