const Joi = require('joi');

module.exports = Joi.object(
    {
        user_id: Joi.number()
            .integer()
            .min(1)
            .required()
    }
);
