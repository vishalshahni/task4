const express = require('express');
const router = express.Router();
const controller = require('../controller/adminController')

router.get('/add-product',controller.adminController)

router.post('/add-product',controller.adminControllerPost)


module.exports = router;