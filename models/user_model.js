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