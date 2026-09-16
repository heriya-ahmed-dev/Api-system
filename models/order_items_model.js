const db = require('../db')

const createorderItems = (orderItems,callback) =>{

    const {order_id,
            product_id,
            quantity,
            price} 
            = orderItems

    const values = [
                    order_id,
                    product_id,
                    quantity,
                    price	
                   ]
    const sql = `INSERT INTO order_items 
                 (order_id,product_id,quantity,price) 
                 VALUES(?,?,?,?)`

        db.query(sql,values,callback)
}


const getAllorderItems = (callback) =>{
    const sql = `SELECT * FROM order_items`

    db.query(sql,callback)
}


const getorderItemsById = (id,callback) =>{
    const sql = `SELECT * FROM order_items WHERE id = ?`

    db.query(sql,[id],callback)
}

const updateorderItems = (id,orderItems,callback) =>{
    const { order_id,product_id,quantity,price } = orderItems;

     const values = [
                     order_id,
                     product_id,
                     quantity,
                     price,
                    id
                   ]

    const sql  = `UPDATE order_items
                  SET  
                   order_id = ? ,
                   product_id = ?,
                   quantity = ? ,
                   price= ?
                 WHERE id = ?`

    db.query(sql,values,callback)
}

const deleteorderItems = (id,callback) =>{
    const sql = `DELETE FROM order_items WHERE id = ? `

    db.query(sql,[id],callback)
}


module.exports = {
    createorderItems,
    getAllorderItems,
    getorderItemsById,
    updateorderItems,
    deleteorderItems
}