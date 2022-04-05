// for the express 
const express = require('express')
const app = express()
const port = 80;

// get requests here 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
// listening at the port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })