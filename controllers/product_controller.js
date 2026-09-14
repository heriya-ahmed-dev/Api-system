const productModel = require('../models/product_model')

const GetAllProducts = (req,res) =>{
   productModel.getAllProducts((err,result)=>{
         if(err){
            res.status(401).send({
                message:'Error happened on the getAllProducts'
            })
            console.log('Error happened on the getAllProducts',err)
         }
         res.status(200).send(result)
         console.log(result)

        
   })
}

const CreateProducts = (req,res) =>{
  const products = req.body

  productModel.createProducts(products,(err,result)=>{
     if(err){
        console.log('Error happend during product creating',err)
     }
     console.log('Products successfully created',result)
  })
}

const GetProductsById = (req,res) =>{

    const {id} = req.params
    productModel.getProductById(id,(err,result)=>{
        if(err){
            res.send({
                message: "Error happend on the get products by id"
            })
            console.log(err)
            res.send(err)
        }
        res.status(200).send(result)
        console.log(result)
    })
}


const UpdateProducts = (req,res) =>{
    const {id} = req.params;
    const products = req.body

    productModel.updateProducts(products,id,(err,result)=>{
        if(err){
            console.log('Error happend on the product update',err)
        }
        else{
            console.log('Data succesfully updated')
        }

    })
}


module.exports = {
    GetAllProducts,
    CreateProducts,
    GetProductsById,
    UpdateProducts
}