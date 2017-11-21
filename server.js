var express = require('express')
var app = express();

var port = process.env.PORT || 8080;

// create our app
app.use(express.static('public'))


app.listen(port, function() {
    console.log('Port:' + port);
  });  

