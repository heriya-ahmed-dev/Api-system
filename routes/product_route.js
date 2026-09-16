const express = require('express')

const ProductController = require('../controllers/product_controller');

const router = express.Router()

router.get('/product',ProductController.GetAllProducts);
router.post('/product',ProductController.CreateProducts)
router.get('/product/:id',ProductController.GetProductsById)
router.put('/product/:id',ProductController.UpdateProducts)
router.delete('/product/:id',ProductController.DeleteProducts)

module.exports = router