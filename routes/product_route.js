const express = require('express')

const ProductController = require('../controllers/product_controller');

const router = express.Router()

router.get('/',ProductController.GetAllProducts);
router.post('/',ProductController.CreateProducts)
router.get('/:id',ProductController.GetProductsById)
router.put('/:id',ProductController.UpdateProducts)

module.exports = router