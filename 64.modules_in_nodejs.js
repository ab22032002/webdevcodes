// modules used  to read the files 
// jo function kam ki hai vo google se dondh le FS MOdule 
const fs = require("fs");
// ("firstarg= filename","secondargs= encoding");
const text = fs.readFileSync("1.try.txt","utf-8");
console.log("the content in the file is ");
console.log(text);
console.log("creating a new file ");
// creating the file using direct addressing fs.writeFilesync
fs.writeFileSync("2.try2.txt",text);  /// writtin the text in the file of the text written in the text 
console.log("check the second file to see the contents have been wriiten or not ")
