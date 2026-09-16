const db = require('../db')


const createorders = (orders,callback) =>{
    const {user_id ,total_amount, status, shipping_address ,created_at } = orders

    const values = [
                    user_id ,
                    total_amount, 
                    status, 
                    shipping_address ,
                    created_at
                   ]
    const sql = `INSERT INTO orders 
                 (user_id ,total_amount, status, shipping_address ,created_at) 
                 VALUES(?,?,?,?,?)`

        db.query(sql,values,callback)
}


const getAllorders = (callback) =>{
    const sql = `SELECT * FROM orders`

    db.query(sql,callback)
}


const getordersById = (id,callback) =>{
    const sql = `SELECT * FROM orders WHERE id = ?`

    db.query(sql,[id],callback)
}

const updateorders = (id,orders,callback) =>{
    const {user_id ,total_amount, status, shipping_address ,created_at} = orders;

     const values = [
                    user_id ,
                    total_amount,
                    status, 
                    shipping_address,
                    created_at,
                    id
                   ]

    const sql  = `UPDATE orders
                   SET  user_id = ?,
                     total_amount = ?,
                     status = ?,
                     shipping_address = ?,
                     created_at = ?

                 WHERE id = ?`

    db.query(sql,values,callback)
}

const deleteorders = (id,callback) =>{
    const sql = `DELETE FROM orders WHERE id = ? `

    db.query(sql,[id],callback)
}


module.exports = {
    createorders,
    getAllorders,
    getordersById,
    updateorders,
    deleteorders
}