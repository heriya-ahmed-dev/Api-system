const reviewModel = require('../models/review_model');

const Createreview = (req,res) =>{
    const reviews = req.body

    reviewModel.createreview(reviews,(err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during review created"
            })
            console.log('Error happened during review created',err)
        }else{
            res.status(200).send({
                message : "review successfully created!!!"
            })
            console.log( "review successfully created!!!")
        }
    })
}

const GetAllreview = (req,res) =>{
    reviewModel.getAllreview((err,result)=>{
        if(err){
            res.status(500).send({
                messgae : "Error happened during review data sent from the data base"
            })
            console.log('Error happened during review data sent from the data base',err)
        }else{
            res.send(result)
        }
        console.log(result)
    })
}


const GetreviewById = (req,res) =>{
    const {id} = req.params
    
    reviewModel.getreviewById(id,(err,result)=>{
            if(err){
            res.status(500).send({
                messgae : "Error happened during review data sent from the data base with id"
            })
            console.log('Error happened during review data sent from the data base with id',err)
            }else{
            res.send(result)
           }
             console.log(result)
    
    })
}


const Updatereview = (req,res) =>{
       const reviews = req.body
       const {id} = req.params

       reviewModel.updatereview(id,reviews,(err,result)=>{
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


const Deletereview = (req,res) =>{
    const {id} = req.params

    reviewModel.deletereview(id,(err,result)=>{
        if(err){
            res.status(500).send({
                message : "Error happened during deleeting"
            })
            console.log('Error happend during deleting!!!')
        }
        res.status(200).send({
            message : "review data successfully deleted!!!"
        })
        console.log('review data successfully deleted!!!')
    })
}

module.exports = {
    Createreview,
    GetAllreview,
    GetreviewById,
    Updatereview,
    Deletereview
}