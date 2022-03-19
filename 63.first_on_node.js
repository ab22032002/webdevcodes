//let x = 500;
// console.log("this  is the value of x",x);
// if the run button wont work for you try having 
// .\63.first_on_js.js  


/*** i don't know what this code do right now  */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001; // this can be changed to make this things use for you 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World this is abhinav singh bhardwaj');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudoselectors&more designign</title>
      <style>
          .container{
              border:2px solid red;
              background-color:chartreuse;
              border-radius: 8px;
              width:666px;
              margin:auto;
              padding:33px;
          }
          a{
              text-decoration:none;
              /* to remove the underline symbol from the anchor */
          }
          a:hover
          {
              background-color: cornflowerblue;
              color:white;
          }
          /* to make the button alike to the anchor one  */
          button:hover
          {
              background-color: crimson;
              color:white;
          }
          a:visited
          {
              color:white;
          }
          a:active
          {
              color:black;
              /* when you just see while loading your page it turned this  */
          }
          .btn
          {
              background-color: coral;
              padding:6px;
              border:none;
              cursor:pointer;
              /* to make the button also like the link whenever someone points  */
              font-size:15px;
              border-radius:4px;
  
          }
          .btn:hover
          {
              border:2px solid cyan;
          }
      </style> 
  </head>
  <body>
      <div class="container">
          <h3>this is my heading </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum ipsum tempora, ex fugiat quae magnam labore deleniti itaque soluta ea error distinctio nihil. Adipisci, animi? Commodi quae cum ipsum quasi repudiandae magni deserunt?
          </p>
          <a href="https://google.com" class="btn" target="_blank">Read more</a>
          <button class="btn">contact us </button>
          <a href="https://bootstrap.com" class="btn" target="_blank">bootstrap</a>
      </div>
  </body>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// REPL read evaluate print loop 
// google//REPL
// double = tab + tab to see the globally declared variable 
