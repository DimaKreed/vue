const Joi = require('joi');

module.exports = Joi.object(
    {
        model: Joi.string()
            .alphanum()
            .min(2)
            .max(100)
            .required(),
        user_id: Joi.number()
            .integer()
            .min(1)
            .required()

    }
);
