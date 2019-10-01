const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/',function(req,res){
    res.render('index',{
        name:'đẹp trai'
    });
});

app.use(express.static('public'));
app.get('/sanpham',function(req,res){
    res.render('sanpham/sanpham',{
        users:[
            {id:1,name:'Uan'},
            {id:2,name:'Uyen'}
        ]
    });
})

app.listen(port, function(){
    console.log('Server runing is port : '+ port);
})