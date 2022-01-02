const test = require("../routes/test");

module.exports = function(app){
    app.use("/api/test",test);
}