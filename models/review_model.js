const db = require('../db')

const createreview = (reviews,callback) =>{
    const {
        user_id	,
        product_id,
        comment,	
        stars
    } = reviews
  
    const sql = `INSERT INTO reviews 
                  (user_id , product_id, comment, stars)
                  VALUES (?,?,?,?)`
   const values =  [
        user_id	,
        product_id,
        comment,	
        stars
   ]

   db.query(sql,values,callback)
    
}

const getAllreview = (callback) =>{
    const sql = `SELECT * FROM reviews`

    db.query(sql,callback)
}

const getreviewById = (id,callback) =>{
    const sql = `SELECT * FROM reviews WHERE id = ?`
    
    db.query(sql,[id],callback)
}

const updatereview = (id,reviews,callback) =>{
     const {
        user_id	,
        product_id,
        comment,	
        stars
    } = reviews

    const sql =`UPDATE reviews SET
              user_id = ?,
              product_id = ?,
              comment = ?,	
              stars = ?
               WHERE id = ?
              
     `
     const values  = [
        user_id	,
        product_id,
        comment,	
        stars,
        id
     ]
     
     db.query(sql,values,callback)
}
const deletereview = (id,callback) =>{
   const sql = `DELETE FROM reviews WHERE id = ?`

   db.query(sql,[id],callback)
}

module.exports = {
    createreview,
    getAllreview,
    getreviewById,
    updatereview,
    deletereview
}