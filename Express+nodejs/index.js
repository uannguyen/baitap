const express=require('express');
const app = express();
const cors = require('cors');
const bodyParser =require( 'body-parser');
const port = 3000;
const mongoose=require('mongoose');
// var Sanpham=require('./controlers/sanpham.controlers');
var Chitiet_sanpham=require('./controlers/chitiet_sanpham.controlers');
var product=require('./models/sanpham.model');
var Product_detail=require('./models/chitiet_sanpham.model');
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

app.get('/',function(req,res){
    
    product.find().then(function(product){
        res.render('sanpham/sanpham',{
            product:product
     });
        });    
        });
       
app.get('/sanpham/:id',function(req,res){
    product.findById(req.params.id).then((chitiet)=>{
        res.render('sanpham/product_detail',{product:chitiet})
    })
   
}); 



// app.get('/',Sanpham.index);
// app.get('/sanpham/',Chitiet_sanpham.index);

app.use(express.static('public'));



app.listen(port, function(){
    console.log('Server runing is port : '+ port);
})