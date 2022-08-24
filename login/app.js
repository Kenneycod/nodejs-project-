const express=require('express');
const path=require('path');
const app = express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(__dirname));
app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.get('/',(req,res)=>{
    res.send('Hello world is');
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //this is the database work
    res.send('Successfully post a data');
});
app.listen(5500);

