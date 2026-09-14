const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
app.use(express.json());
const Router = require('./routes/product_route')

app.use(cors())
const port  = process.env.PORT

app.use('/',Router)


app.listen(port,(err)=>{
    if(err){
        console.log('Error happend during server running')
    }
    else{
       console.log(`Server is successfuly running on port ${port}`)
    }
    
})