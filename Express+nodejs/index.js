const express=require('express');
const app = express();
const cors = require('cors');
const bodyParser =require( 'body-parser');
const port = 3000;
const mongoose=require('mongoose');
var Sanpham=require('./controlers/sanpham.controlers');
var Chitiet_sanpham=require('./controlers/chitiet_sanpham.controlers');
var product=require('./models/sanpham.model');
url='mongodb://127.0.0.1:27017/product';
 mongoose.connect(url,{ useNewUrlParser:true , useUnifiedTopology:true}); //Kết nối Mongodb 
 const connection = mongoose.connection;//sử dụng mongoose

 connection.once('open', () => {
     console.log('MongoDB database connection established successfully!');
 });

const router=express.Router();




app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs'); // sử dụng engine ejs
app.set('views', './views');

app.get('/',Sanpham.index);
app.get('/sanpham/:id',Chitiet_sanpham.index);

app.use(express.static('public'));
var user=[ {id:1,name:'Uan'},
{id:2,name:'Uyen'},
{id:3,name:'fuck'}
]
app.get('/sanpham',function(req,res){
  var id=req.params.
    // res.send(req.params);
    res.render('sanpham/sanpham',{
        users:user
           
        
    });
})

app.listen(port, function(){
    console.log('Server runing is port : '+ port);
})