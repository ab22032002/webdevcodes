// Synchronous or blocking 
// -------- line by line exe ---------------------------------------
// asynchronous or non-blocking
// ------did'nt guarranty the line by line exe--------------
// fs.readFilesync()// this will read then only run 
const fs = require("fs");
let text = fs.readFile("1.try.txt","utf-8",(err,data)=>{  //fs.readFileSync("1.try.txt","utf-8"); synchronized file can be called here 
    console.log(" this is error-> ",  err,"\n this is the content of the file specified in the operation ->",data);
    // b is containing the file contents as of 1.try.txt all the content have been shifted to it 
}); // it is expecting a call back funtion 
console.log("this is message");
console.log(text);
/*HOW DOES THE ASYNCHRONOUS PROPERTY HAVE WORKED ?
  actually we see fs.readfile(,,(err,data)=>call back function expected)
  have not been synchronized as we see the output at the last */

  /***********if it was synchronized ********************/
//   then it have been appeared before the "this is message" 
//   let it has taken along time to exe then it will be hectic task for us to use the last line as function 

