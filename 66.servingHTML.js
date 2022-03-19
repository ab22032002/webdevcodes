const http = require('http')
const fs = require('fs')
const filecontent = fs.readFileSync('23.creating_navigation_menu.html');
// we're creating the server here 
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filecontent)
})
server.listen(80,'127.0.0.2',()=>{  // this code '127.0.0.1' can directly run from the  browser to provide us the given html file but we must mention the type at Content -type
    console.log("listening on port 80")
})
// this have directly run from the browser at the given port  it can '127.0.0.2 or else ca be changed at the last digit of the particular port
// why we have used port 80 is directly running the code from the browser without mentioning the port 80 other ports we have to mention 
/******************** for the other ports than 80  */
// like we have to write 127.0.0.1:8000 if its 8000 port then it will run on the browser 