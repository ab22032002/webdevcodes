const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'; // used in the server listening 
const port = 3000;              // used in server listening 
const home = fs.readFileSync('./index.html');  // this respected constants have been used in the call by the index.html in this directory 
const about= fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');
const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    // this is printing the favicon.ico whenever we're trying to run the server 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
 
 // making it else if statement for targetting the elements 
 if(url=='/')  // this is already mentioned in the form of the index.html 
 {
    res.end(home);
 }
 else if(url=='/about')
 {
    res.end(about);
 }
 else if  (url=='/services')
 {
    res.end(services);
 }
 else if (url=='/contact')
 {
    res.end(contact);
 }
 else
{   
    res.statusCode=404;
    res.end("<h1>404 url not fond</h1>");
}
});
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  // simple acting as server till 
  // we have been running the js from outside that's why it was throwing error 
  // cd 67.creating_a_custom_backend 
  // have helped to go under the file and then served the HTML files all along 
