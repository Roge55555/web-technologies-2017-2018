const mongoose = require('../connection/connection');


const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 10
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 15
    }
});