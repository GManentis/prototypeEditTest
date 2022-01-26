const express = require("express");
const router = express.Router();
const myFirstMiddleware = require("../middleware/myFirstMiddleware");
require("../utilities/myModule")();

/*
Important note:
If we console.log the entire object that was product of class instatiation, with edited prototype the inserted property will not be displayed
Yet if we console.log the property that was inserted via prototype ,the property will be displayed
Example:

function MyClass(prop1,prop2){
    this.myProperty = myProp1;
    this.myProperty2 = myProp2;
}

const myObj = new MyClass("p1","p2");
MyClass.prototype.param3 = "p3";

console.log(myObj); //The param3 property will not be included
console.log(myObj.param3); // It will display p3



*/

router.get("/",async(req,res) => {
    const myPreArray = [];
    Array.prototype.consoleLog = function(){
        console.log("Prototype set pre setting array");
    }
    const myArray = [];
    myArray.consoleLog();
    myPreArray.consoleLog(); //if we set an array before passing method in prototype, the pre set array get the method as well
    return res.send("Ok");
});

//if prototype new method is set on middleware, the change passes on router as well
router.get("/test-first-middleware",[myFirstMiddleware],async(req,res) => {
    const myArray = [];
    myArray.testFirst();
    return res.send("Ok test first middleware");
});

router.get("/test-with-module",async(req,res) =>{
    const myArrayModule = [];
    myArrayModule.myConsoleLogModule(); //from up module
    return res.send("Ok test with module");
});

router.get("/test-in-init",async(req,res) =>{
   //the array.prototype is set in index js
    const myPreciousArray = [];
    myPreciousArray.testInInit();
    return res.send("Ok test in init");
});

module.exports = router;