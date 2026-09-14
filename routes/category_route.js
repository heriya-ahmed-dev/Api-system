const express = require('express')
const router = express.Router()
const category_controller = require('../controllers/category_controller')

router.post('/category',category_controller.Create_Category);
router.get('/category',category_controller.GetAllCategory);
router.get('/category',category_controller.GetCategoryById);
router.put('/category',category_controller.UpdateCategory);
router.delete('/category',category_controller.DeleteCategory);



module.exports = router