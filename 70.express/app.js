const express =require("express");
const path = require("path");
// here we're performing the import operation 
const app = express(); // app created here 
const port = 80; // i want to run it in porrt 80 
// serving the static files 
app.use('/static',express.static('static'));

// this is setting the template engine as pug 
app.set('view engine','pug');

//setting the views directory 
app.set('views',path.join(__dirname,'views'));

//our pug demo endpoint 
app.get('/demo',(req,res)=>{ // handling get request at slash endpoint here only 
    res.status(200).render('demo',{ title:'hey joseph', message:'hello there thankyou for teaching me this '});
});


app.get("/",(req,res)=>{ // handling get request at slash endpoint here only 
    res.send("this is my home page first express with harris");
});
app.get("/about",(req,res)=>{ // handling get request at /about endpoint here only 
    res.send("this is my about page first express with harris");
});
app.get("/services",(req,res)=>{ // handling get request at /services endpoint here only 
    res.send("this is my serrvices page with harris");
});
app.get("/our_servers",(req,res)=>{
    res.send("this is my our_servers page with harris");
});
app.get("/contact_us",(req,res)=>{ // handling post  request at /contact_us endpoint here only 
    res.send("this is my contact_uswith harris");
});
app.post("/contact_us",(req,res)=>{
    res.send("this is my first post request is with harris");
});
// downstairs will upadate the status also see the indexing which is crucial yet important 
app.get("/other",(req,res)=>{
    res.status(404).send("this page is not found ");
});
app.listen(port,()=>{
    console.log(`the application started successfully running on this  port ${port}`)
});
// listening is very important as it must listen somewhere else 
// giving the status code back 