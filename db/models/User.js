const mongoose = require('../connection/connection');


const userSchema = mongoose.Schema({
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
    },
    task: {
        type: String,
        "default": "no task"
    }
});


module.exports = mongoose.model('User', userSchema);
