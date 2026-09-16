const ordersModel = require('../models/orders_model')

const Createorders = (req,res) =>{
    const orders = req.body

    ordersModel.createorders(orders,(err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during orders created"
            })
            console.log('Error happened during orders created',err)
        }else{
            res.status(200).send({
                message : "orders successfully created!!!"
            })
            console.log( "orders successfully created!!!")
        }
    })
}

const GetAllorders = (req,res) =>{
    ordersModel.getAllorders((err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during orders data sent from the data base"
            })
            console.log('Error happened during orders data sent from the data base',err)
        }else{
            res.send(result)
        }
        console.log(result)
    })
}

const GetordersById = (req,res) =>{
    const {id} = req.params
    
    ordersModel.getordersById(id,(err,result)=>{
            if(err){
            res.status(500).send({
                messgae : "Error happened during orders data sent from the data base with id"
            })
            console.log('Error happened during orders data sent from the data base with id',err)
            }else{
            res.send(result)
           }
             console.log(result)
    
    })
}

const Updateorders = (req,res) =>{
       const orderss = req.body
       const {id} = req.params

       ordersModel.updateorders(id,orderss,(err,result)=>{
          if(err){
            res.status(500).send({
                messgae : "Error happened during data update"
            })
            console.log('Error happened during data update',err)
            }else{
            res.send(result)
           }
             console.log(result)
    
    
       })
}

const Deleteorders = (req,res) =>{
    const {id} = req.params

    ordersModel.deleteorders(id,(err,result)=>{
        if(err){
            res.status(500).send({
                message : "Error happened during deleeting"
            })
            console.log('Error happend during deleting!!!')
        }
        res.status.send({
            message : "orders data successfully deleted!!!"
        })
        console.log('orders data successfully deleted!!!')
    })
}

module.exports = {
    Createorders,
    GetAllorders,
    GetordersById,
    Updateorders,
    Deleteorders
}