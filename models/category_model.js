const db = require('../db')

const createCategory = (category,callback) =>{
    const {name,description} = category

    const values = [
                    name,
                    description
                   ]
    const sql = `INSERT INTO categories 
                 (name ,description) 
                 VALUES(?,?)`

        db.query(sql,values,callback)
}

const getAllCategory = (callback) =>{
    const sql = ` SELECT * FROM categories`

    db.query(sql,callback)
}

const getCategoryById = (id,callback) =>{
    const sql = `SELECT * FROM categories WHERE id = ?`

    db.query(sql,[id],callback)
}

const updateCategory = (id,category,callback) =>{
    const {name,description} = category;

     const values = [
                    name,
                    description,
                    id
                   ]

    const sql  = `UPDATE FROM categories
                 SET name =?
                     description = ?
                 WHERE id = ?`

    db.query(sql,values,callback)
}

const deleteCategory = (id,callback) =>{
    const sql = `DELETE FROM categories WHERE id = ? `

    db.query(sql,[id],callback)
}





module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}