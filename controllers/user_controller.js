const userModel = require('../models/user_model');

const CreateUser = (req,res) =>{
    const {id} = req.params;
    const users = req.body

    userModel.createUser(id,users,(err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during user created"
            })
            console.log('Error happened during user created',err)
        }else{
            res.status(200).send({
                message : "User successfully created!!!"
            })
            console.log( "User successfully created!!!")
        }
    })
}

const GetAllUser = (req,res) =>{
    userModel.getAllUser((err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during user data sent from the data base"
            })
            console.log('Error happened during user data sent from the data base',err)
        }else{
            res.send(result)
        }
        console.log(result)
    })
}

const GetUserById = (req,res) =>{
    const {id} = req.params
    
    userModel.getUserById(id,(err,result)=>{
            if(err){
            res.status(500).send({
                messgae : "Error happened during user data sent from the data base with id"
            })
            console.log('Error happened during user data sent from the data base with id',err)
            }else{
            res.send(result)
           }
             console.log(result)
    
    })
}

const UpdateUser = (req,res) =>{
       const users = req.body
       const {id} = req.params

       userModel.updateUser(id,users,(err,result)=>{
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

const DeleteUser = (req,res) =>{
    const {id} = req.params

    userModel.deleteUser(id,(err,result)=>{
        if(err){
            res.status(500).send({
                message : "Error happened during deleeting"
            })
            console.log('Error happend during deleting!!!')
        }
        res.status.send({
            message : "user data successfully deleted!!!"
        })
        console.log('user data successfully deleted!!!')
    })
}

module.exports = {
    CreateUser,
    GetAllUser,
    GetUserById,
    UpdateUser,
    DeleteUser
}