const fs = require('fs');
const readline = require('readline');

const constants = require('./constants');

const data = [];


const read = readline.createInterface(
    {
    input: fs.createReadStream('./services/movies.json'),
    terminal: false
});

read.on('line', function(line) 
{
    data.push(JSON.parse(line));
});

const sort = query => 
{
    const key = query.key;
    const order = query.order;

    if(key === constants.id || key === constants.popularity)
    {
        data.sort((a, b) => 
        {
            return a[key] - b[key];
        });
    } else if (key === constants.name || key === constants.adult) 
    {
        data.sort((a, b) => {
            if(a[key] < b[key][0]) return -1;
            else if (a[key] > b[key][0]) return 1;
            else return 0;
        });
    }

    if(order === constants.dec) data.reverse();

    return data;
};

const pagination = query => 
{
    const offset = parseInt(query.offset);
    const limit = parseInt(query.limit);

    return data.slice(offset, offset + limit);
};

const find_name = name => 
{
    const found = [];

    data.find((elem) => 
    {
        const sample = name.replace(' ', '').toLowerCase();
        const elValue = elem[constants.name].replace(' ', '').toLowerCase();
        if (elValue.search(sample) !== -1)
            found.push(elem);
        return false;
    });

    return found;
};

const find_id = id => 
{
    return data.find(elem => 
    {
        return elem[constants.id] === parseInt(id);
    });
};


module.exports = 
    {
    data,
    sort,
    find_id,
    find_name,
    pagination
};