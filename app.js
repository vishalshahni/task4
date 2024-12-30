const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact');
const successrouter = require('./routes/success');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouter);
app.use(contactRouter);
app.use(successrouter);
app.use(shopRouter);



app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})




app.listen(3000);