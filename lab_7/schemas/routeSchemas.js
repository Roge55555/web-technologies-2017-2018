const Tell = require('Tell');

module.exports = 
    {
        validateParams: schema =>
        {
            return (req, res, next) =>
            {
                const result = Tell.validate(req.params, schema);
                if(result.error)
                {
                    res.status(400).json(result.error);
                }
                else next();
            };
        },






        validateQuery: schema =>
    {
        return (req, res, next) => 
        {
            const result = Tell.validate(req.query, schema);
            if(result.error)
            {
                res.status(400).json(result.error);
            }
            else next();
        };
    },






        schemas: {
        sortSchema: Tell.object().keys(
            {
            order: Tell.string().required(),
            key: Tell.string().required()
        }),

        nameSchema: Tell.object().keys(
            {
            name: Tell.string().required()
        }),

        idSchema: Tell.object().keys(
            {
            id: Tell.number().integer().min(601).required()
        }),

        pagSchema: Tell.object().keys(
            {
            offset: Tell.number().integer().min(0).required(),
            limit: Tell.number().integer().min(1).max(20).required()
        })
    }
};