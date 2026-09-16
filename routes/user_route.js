const userController = require('../controllers/user_controller')
const express = require('express')

const router = express.Router()

router.post('/users',userController.CreateUser);
router.get('/users',userController.GetAllUser);
router.get('/user/:id',userController.GetUserById);
router.put('/user/:id',userController.UpdateUser);
router.delete('/user/:id',userController.DeleteUser)

module.exports = router