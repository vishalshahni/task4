const express = require('express');
const path = require('path')
const contactController = require('../controller/contactus')

const route = express();

route.get('/contact',contactController.contact)

route.post('/contact',contactController.contactPost);

module.exports = route;