const orderItemsController = require('../controllers/order_items_controller');

const express = require('express')

const router = express.Router()

router.post('/orderItems',orderItemsController.CreateorderItems);

router.get('/orderItems',orderItemsController.GetAllorderItems);

router.get('/orderItems/:id',orderItemsController.GetorderItemsById);

router.put('/orderItems/:id',orderItemsController.UpdateorderItems);

router.delete('/orderItems/:id',orderItemsController.DeleteorderItems)

module.exports = router