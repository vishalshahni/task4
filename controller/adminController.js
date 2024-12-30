const path = require('path')

exports.adminController = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
}

exports.adminControllerPost = (req,res,next)=>{
    const normalObject = Object.assign({}, req.body)
    console.log(normalObject);
    res.redirect('/');
}