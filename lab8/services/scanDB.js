const fs = require('fs');
const readline = require('readline');

const constants = require('./constants');

const db = [];


const reader = readline.createInterface({
    input: fs.createReadStream('./services/movies.json'),
    terminal: false
});

reader.on('line', function(line) {
    db.push(JSON.parse(line));
});

const findByName = name => {
    const found = [];

    db.find((elem) => {
        const sample = name.replace(' ', '').toLowerCase();
        const elValue = elem[constants.name].replace(' ', '').toLowerCase();
        if (elValue.search(sample) !== -1)
            found.push(elem);
        return false;
    });

    return found;
};

const findById = id => {
    return db.find(elem => elem[constants.id] === parseInt(id));
};

const sortBy = query => {
    const key = query.key;
    const order = query.order;

    if(key === constants.id || key === constants.popularity){
        db.sort((a, b) => {
            return a[key] - b[key];
        });
    } else if (key === constants.name || key === constants.adult) {
        db.sort((a, b) => {
            if(a[key] < b[key][0]) return -1;
            else if (a[key] > b[key][0]) return 1;
            else return 0;
        });
    }

    if(order === constants.dec) db.reverse();

    return db;
};

const pagination = query => {
    const offset = parseInt(query.offset);
    const limit = parseInt(query.limit);

    return db.slice(offset, offset + limit);
};

module.exports = {
    db,
    sortBy,
    findById,
    findByName,
    pagination
};