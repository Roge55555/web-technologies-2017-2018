const DB = require('../services/scanDB');

module.exports = {
    movies: (req, res) => {
        res.send(DB.db);
    },

    sort: (req, res) => {
        res.send(DB.sortBy(req.query));
    },

    findByName: (req, res) => {
        res.send(DB.findByName(req.params.name));
    },

    findById: (req, res) => {
        res.send(DB.findById(req.params.id));
    },

    pagination: (req, res) => {
        res.send(DB.pagination(req.query));
    }
};