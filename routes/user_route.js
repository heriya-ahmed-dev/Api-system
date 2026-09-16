const userController = require('../controllers/user_controller')

const express = require('express')

const router = express.Router()

router.post('/users',userController.CreateUser);

router.get('/users',userController.GetAllUser);

router.get('/users/:id',userController.GetUserById);

router.put('/users/:id',userController.UpdateUser);

router.delete('/users/:id',userController.DeleteUser)

module.exports = router