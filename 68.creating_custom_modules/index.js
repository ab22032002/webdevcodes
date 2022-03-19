// importing the module
const mod =require("./module"); // here we're putting the module here in the mod so it can  accessed from here only 
// getting what is exported  by the module.js 
console.log(mod); // simply it will return the object of the module
console.log(mod.avg([5,6,7]));
console.log("this is the naem in the module :",mod.name);
// explicitly calling the function in the upper case 
console.log("this is index.js");
