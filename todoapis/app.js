//Main application file (entry file)

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController'); // this returns a function
var apiController = require('./controllers/apiController');

//setting up Port number where node js will be listening at. 
var port = process.env.PORT || 3000;

//setting a static folder where static files will be located
app.use('/', express.static(__dirname + '/public'));

//using ejs as node js view engine
app.set('view engine', 'ejs');

//simply connecting to getDb by retrieving connection link from config folder
mongoose.connect(config.getDbConnectionString()); 

//passing express app into setupController
setupController(app);
apiController(app);

app.listen(port);

