const path = require('path');

exports.shopController = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}