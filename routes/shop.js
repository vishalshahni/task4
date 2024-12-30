const express = require('express');
const route = express.Router();
const controller = require('../controller/shopController')




route.get('/',controller.shopController)

module.exports = route;