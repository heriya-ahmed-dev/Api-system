const orderItemsModel = require('../models/order_items_model')

const CreateorderItems = (req,res) =>{
    const orderItems = req.body

     orderItemsModel.createorderItems(orderItems,(err,result)=>{
       if(err){
            res.status(500).send({
                messgae : "Error happened during orderItems created"
            })
            console.log('Error happened during orderItems created',err)
        }else{
            res.status(200).send({
                message : "orderItems successfully created!!!"
            })
            console.log( "orderItems successfully created!!!")
        }
    })
    
       
}

const GetAllorderItems = (req,res) =>{
    orderItemsModel.getAllorderItems((err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during orderItems data sent from the data base"
            })
            console.log('Error happened during orderItems data sent from the data base',err)
        }else{
            res.send(result)
        }
        console.log(result)
    })
}

const GetorderItemsById = (req,res) =>{
    const {id} = req.params
    
    orderItemsModel.getorderItemsById(id,(err,result)=>{
            if(err){
            res.status(500).send({
                messgae : "Error happened during orderItems data sent from the data base with id"
            })
            console.log('Error happened during orderItems data sent from the data base with id',err)
            }else{
            res.send(result)
           }
             console.log(result)
    
    })
}

const UpdateorderItems = (req,res) =>{
       const orderItemss = req.body
       const {id} = req.params

       orderItemsModel.updateorderItems(id,orderItemss,(err,result)=>{
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

const DeleteorderItems = (req,res) =>{
    const {id} = req.params

    orderItemsModel.deleteorderItems(id,(err,result)=>{
        if(err){
            res.status(500).send({
                message : "Error happened during deleeting"
            })
            console.log('Error happend during deleting!!!')
        }
        res.status.send({
            message : "orderItems data successfully deleted!!!"
        })
        console.log('orderItems data successfully deleted!!!')
    })
}

module.exports = {
    CreateorderItems,
    GetAllorderItems,
    GetorderItemsById,
    UpdateorderItems,
    DeleteorderItems
}