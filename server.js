const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });