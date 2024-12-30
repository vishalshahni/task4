const express = require('express');
const path = require('path')

const route = express();

route.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
})

route.post('/contact',(req,res)=>{
    res.redirect('success');
})

module.exports = route;