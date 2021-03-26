const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/1',function(req,res){
    res.sendFile(path.join(__dirname+'/1.html'));
});

router.get('/2',function(req,res){
    res.sendFile(path.join(__dirname+'/2.html'));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 8080);

