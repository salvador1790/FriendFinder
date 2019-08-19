var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })


require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);


app.listen(PORT,function(err){
    if (err) throw err;

})

