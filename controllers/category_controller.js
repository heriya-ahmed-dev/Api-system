const categoryModel = require('../models/category_model')

const Create_Category = (req,res) =>{
    const category = req.body;

    categoryModel.createCategory(category,(err,result)=>{
         if(err){
            res.status(500).send({
                message:'Error happened on the category creation'
            })
            console.log('Error happened on the category creation',err)
         }
         else{
            res.status(200).send({
                message:"category data succesfully created"
            })
            console.log('Category data successfully created!!!')
         }
    })
}

const GetAllCategory = (req,res) =>{
    categoryModel.getAllCategory((err,result)=>{
        if(err){
            res.status(500).send({
                message:'Error happened on the category data sent from the data base'
            })
            console.log('Error happened on the category data sent from the data base',err)
         }
         else{
            console.log('Category data successfully sent from the data base')
            res.send(result)
            
         }
    
    })
}
const GetCategoryById = (req,res) =>{
    const {id} = req.params
    categoryModel.getCategoryById(id, (err,result)=>{
         if(err){
            res.status(500).send({
                message:'Error happened on the category data sent from the data base with id'
            })
            console.log('Error happened on the category data sent from the data base with id',err)
         }
         else{
            res.status(200).send(result)
            console.log('Category data successfully sent from the data base')
         }
    })
}

const UpdateCategory = (req,res) =>{
    const category = req.body;
    const {id} =req.params;

    categoryModel.updateCategory(id,category,(err,result)=>{
          if(err){
            res.status(500).send({
                message:'Error happened on the category updating'
            })
            console.log('Error happened on the category updating',err)
         }
         else{
            res.status(200).send({
                message:"category data succesfully updated"
            })
            console.log('Category data successfully updated!!!')
         }
    })
}

const DeleteCategory = (req,res) =>{
    const {id} = req.params;
    categoryModel.deleteCategory(id,(err,result)=>{
         if(err){
            res.status(500).send({
                message:'Error happened on the category deletion'
            })
            console.log('Error happened on the category deletion',err)
         }
         else{
            res.status(200).send({
                message:"category data succesfully deleted"
            })
            console.log('Category data successfully deleted!!!')
         }
    })
}
module.exports ={
    Create_Category,
    GetAllCategory,
    GetCategoryById,
    UpdateCategory,
    DeleteCategory
}