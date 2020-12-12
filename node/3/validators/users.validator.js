const Joi = require('joi');

const { RegExp: { EMAIL, PASSWORD } } = require('../helpers');

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
    }
);
