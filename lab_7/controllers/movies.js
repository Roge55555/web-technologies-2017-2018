const data = require('../services/scandata');

module.exports = {
    movies: (req, res) => {
        res.send(data.data);
    },

    pagination: (req, res) => {
        res.send(data.pagination(req.query));
    },

    find_name: (req, res) => {
        res.send(data.find_name(req.params.name));
    },

    sort: (req, res) => {
        res.send(data.sort(req.query));
    },

    find_id: (req, res) => {
        res.send(data.find_id(req.params.id));
    }

};