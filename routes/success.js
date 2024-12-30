const express=require('express');

const contactController = require('../controller/contactus')

const route = express();

route.get('/success',contactController.success)

module.exports = route;