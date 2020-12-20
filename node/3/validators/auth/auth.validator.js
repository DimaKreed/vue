const Joi = require('joi');

const { PASSWORD, EMAIL } = require('../../constants/regexp');

module.exports = Joi.object(
    {
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(100),
        email: Joi.string()
            .regex(EMAIL),
        password: Joi.string()
            .regex(PASSWORD)
            .required(),

    }
);
