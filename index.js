const express = require("express");
const app = express();

require("./startup/routes")(app);
Array.prototype.testInInit = function(){
    console.log("Test in init");
}

app.listen(3000,() => {console.log("It runs on 3000")});