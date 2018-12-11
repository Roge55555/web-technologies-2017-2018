const express = require('express');

const app = express();


if (process.env.NODE_ENV !== 'production')
{
  require('dotenv').load();
}


app.use('/', require('./routes/routes'));
app.use('/static', express.static('static'));
app.set('views', './views');
app.set('view engine', 'ejs');


const server = app.listen(process.env.PORT || 5000, function ()
{
  const port = server.address().port;
  console.log('*** app is working on port ' + port);
});


process.stdin.resume();

function exitHandler(options, exitCode)
{
    if (options.exit) process.exit();
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);

}

process.on('SIGINT', exitHandler.bind(null, { exit:true } ));
process.on('exit', exitHandler.bind(null, { cleanup:true } ));

