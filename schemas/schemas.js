const Joi = require('joi');

module.exports = {
	validateQuery: schema => {
			return (req, res, next) => {
					const result = Joi.validate(req.query, schema);
					if(result.error){
							res.status(400).json(result.error);
					}
					else next();
			};
	},

	schemas: {
        regSchema: Joi.object().keys({
            login: Joi.string().min(4).max(10).required(),
            password: Joi.string().min(8).max(16).required()
        }),

        saveSchema: Joi.object().keys({
            newTask: Joi.string().max(50).required(),
            user: Joi.string().min(4).max(10).required()
        }),
        deleteSchema: Joi.object().keys({
            user: Joi.string().min(4).max(10).required()
        }),
		authSchema: Joi.object().keys({
				login: Joi.string().min(4).max(10).required(),
				password: Joi.string().min(8).max(16).required()
		})
	}
};