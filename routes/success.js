const express=require('express');
const path = require('path');

const route = express();

route.get('/success',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','success.html'));
})

module.exports = route;