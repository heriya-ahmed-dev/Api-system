const db = require('../db')

const createUser = (users,callback) =>{
    const {
        name,
        email,
        password,
        phone,	
        address,	
        role ,	
        created_at
    } = users
  
    const sql = `INSER INTO users 
                  (name	,email,password	,phone,address, role ,created_at)
                  VALUES (?,?,?,?,?,?,?)`
   const values =  [
        name,
        email,
        password,
        phone,	
        address,	
        role ,	
        created_at
   ]

   db.query(sql,values,callback)
    
}

const getAllUser = (callback) =>{
    const sql = `SELECT * FROM users`

    db.query(sql,callback)
}

const getUserById = (id,callback) =>{
    const sql = `SELECT * FROM user WHERE id = ?`
    
    db.query(sql,[id],callback)
}

const updateUser = (id,users,callback) =>{
     const {
        name,
        email,
        password,
        phone,	
        address,	
        role ,	
        created_at
    } = users

    const sql =`UPDATE users SET
               name = ?,
               email = ?,
               password = ?,
               phone = ? ,
               address = ?,
               role = ?,
               created_at = ? ,

               WHERE id = ?
              
     `
     const values  = [
        name,
        email,
        password,
        phone,	
        address,	
        role ,	
        created_at,
        id
     ]
     
     db.query(sql,values,callback)
}
const deleteUser = (id,callback) =>{
   const sql = `DELETE users WHERE id = ?`

   db.query(sql,[id],callback)
}

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}