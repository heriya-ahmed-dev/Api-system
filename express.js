const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
app.use(express.json());

const Product_Router = require('./routes/product_route');

const Category_Router = require('./routes/category_route');

const User_Router = require('./routes/user_route');

const Orders_Router = require('./routes/orders_route');

const OrderItems_Router = require('./routes/order_items_route');

app.use(cors());

const port  = process.env.PORT;

app.use('/',Product_Router);

app.use('/',Category_Router);

app.use('/',User_Router);

app.use('/',Orders_Router);

app.use('/',OrderItems_Router);



app.listen(port,(err)=>{
    if(err){
        console.log('Error happend during server running')
    }
    else{
       console.log(`Server is successfuly running on port ${port}`)
    }
    
})

