const mongoose = require('mongoose');

mongoose.connect('mongodb://lab4-mongodb:' + process.env.MONGO_ATLAS_PW + '@lab4-mongodb-shard-00-00-w100s.mongodb.net:27017,lab4-mongodb-shard-00-01-w100s.mongodb.net:27017,lab4-mongodb-shard-00-02-w100s.mongodb.net:27017/test?ssl=true&replicaSet=lab4-mongodb-shard-0&authSource=admin&retryWrites=true', {
    useNewUrlParser: true
});


module.exports = mongoose;