const express = require('express');

const app = express();


app.use('/', require('./routes/movies'));


var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log('app is working on port ' + port);
});



process.stdin.resume();

function exitHandler(options, exitCode) {
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

process.on('exit', exitHandler.bind(null, {cleanup:true}));

process.on('SIGINT', exitHandler.bind(null, {exit:true}));

module.exports = server;