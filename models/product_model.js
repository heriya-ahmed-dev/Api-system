const db = require('../db')

const createProducts = (products,callback) =>{
    const 
          {name	,description ,price	,image,stock,category_id } 
          = products
    const sql = `INSERT INTO products 
                (name ,description , price ,image,stock, category_id)
                VALUES (?,?,?,?,?,?)`
    const values = [
                    name,
                    description,
                    price,
                    image,
                    stock,
                    category_id
    ]
    db.query(sql,values,callback)
}

const getAllProducts = (callback) =>{
    const sql = `SELECT * FROM products`

    db.query(sql,callback)
}


const getProductById = (id,callback) =>{
    const sql  = `SELECT * FROM products WHERE id = ?`

    db.query(sql,[id],callback)
}


const updateProducts = (id,products,callback) =>{
    const {name ,description , price ,image,stock, category_id} = products

    const sql = `UPDATE products 
                    SET name = ?,
                    description = ?,
                    price = ?,
                    image = ?,
                    stock = ?,
                    category_id = ?                           
                WHERE id = ? 
                  `

    const values = [
                    name,
                    description, 
                    price,
                    image,
                    stock, 
                    category_id,
                    id
    ]
        db.query(sql,values,callback)
}

const deleteProducts = (id,callback) =>{
    
    const sql = `DELETE FROM products WHERE id = ?`
    
    db.query(sql,[id],callback)
}


module.exports = {
    getAllProducts,
    createProducts,
    getProductById,
    updateProducts,
    deleteProducts
}

