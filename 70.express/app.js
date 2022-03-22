// const { fs } = require("browserify/lib/builtins");
const express =require("express");
const path = require("path");
// here we're performing the import operation 
const app = express(); // app created here 
const port = 80; // i want to run it in porrt 80 
const fs = require("fs");
 //EXPRESS RALATED STUFF
app.use('/static',express.static('static'));  // serving the static files 
// using the middleware 
app.use(express.urlencoded());

/***THIS IS PUG RELATED STUFF  */
app.set('view engine','pug');                // // this is setting the template engine as pug
app.set('views',path.join(__dirname,'views')); //setting the views directory 

// //our pug demo endpoint 
// app.get('/demo',(req,res)=>{ // handling get request at slash endpoint here only 
//     res.status(200).render('demo',{ title:'hey joseph', message:'hello there thankyou for teaching me this '});
// });
// ENDPOINTS 
app.get('/',(req,res)=>{
    const  con = 'use it wisely '
   // const that = 'this word can be used anywhere so it increases the code reusibility '
    const params = { 'title': 'vollyball is the best game ', "content" : con};
    res.status(200).render('index.pug',params);      // render as using the templates 
})
app.post('/',(req,res)=>{
    console.log(req.body)
    // the above statement have helped us in collecting the data as output in the console 
    name1 =req.body.name1
    age =req.body.age
    gender= req.body.gender
    address= req.body.address
    more=req.body.more
    //putting into the file
    let outputwrite = `the name of the client is ${name1},${age} years old ,${gender},reside in ${address} and know about him/her ${more}`
   // fs.writeFilesync('ouput.txt',outputwrite);
    fs.writeFileSync('ouput.txt',outputwrite);
    // console.log(more);
//   values arrive according to the names rather IDs
    const params = {'message':'your form have been submitted successfully '}
    res.status(200).render('index.pug',params);
})
// START THE SERVER 
app.listen(port,()=>{
    console.log(`the application started successfully running on this  port ${port}`)
});
// listening is very important as it must listen somewhere else 
// giving the status code back 