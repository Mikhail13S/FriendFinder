const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('tiny'));


require("./FriendFinder/app/routing/apiRoutes.js")(app);
require("./FriendFinder/app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});