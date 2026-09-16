const reviewController = require('../controllers/review_controller');

const express = require('express');

const router = express.Router()

router.post('/review',reviewController.Createreview)

router.get('/review',reviewController.GetAllreview);

router.get('/review/:id',reviewController.GetreviewById);

router.put('/review/:id',reviewController.Updatereview);

router.delete('/review/:id',reviewController.Deletereview)

module.exports = router