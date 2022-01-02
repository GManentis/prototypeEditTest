module.exports = function(req,res,next){
    Array.prototype.testFirst = function(){
        console.log("My first test with middleware");
    }
    next();
}