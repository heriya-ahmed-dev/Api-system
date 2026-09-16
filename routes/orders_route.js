const ordersController = require('../controllers/orders_controller');

const express = require('express')

const router = express.Router()

router.post('/orders',ordersController.Createorders);

router.get('/orders',ordersController.GetAllorders);

router.get('/orders/:id',ordersController.GetordersById);

router.put('/orders/:id',ordersController.Updateorders);

router.delete('/orders/:id',ordersController.Deleteorders)

module.exports = router